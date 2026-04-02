// app/api/zr-webhook/route.js
//
// ZipRecruiter calls this URL every time someone applies to one of your jobs.
// This code receives the applicant's info and creates them as a candidate
// in ApplicantStack under the correct job.
//
// Give ZipRecruiter this URL:  https://yourdomain.com/api/zr-webhook

export async function POST(request) {
  try {
    const token = process.env.APPLICANTSTACK_TOKEN;
    const domain = process.env.APPLICANTSTACK_DOMAIN;
    const webhookSecret = process.env.ZIPRECRUITER_WEBHOOK_SECRET;

    if (!token || !domain) {
      console.error("Missing APPLICANTSTACK_TOKEN or APPLICANTSTACK_DOMAIN environment variables");
      // IMPORTANT: We still return 200 so ZipRecruiter doesn't keep retrying.
      // The error is logged for you to investigate.
      return new Response("OK", { status: 200 });
    }

    // --- Step 1: Read the incoming data from ZipRecruiter ---
    const body = await request.json();

    // Log the incoming application so you can see it in Vercel's logs
    console.log("ZipRecruiter application received:", {
      response_id: body.response_id,
      job_id: body.job_id,
      name: body.name,
      email: body.email,
    });

    // --- Step 2 (Optional but recommended): Verify the request is from ZipRecruiter ---
    // If you set up webhook signatures with ZipRecruiter, uncomment this block.
    // They will send a secret in the X-ZipRecruiter-Signature header.
    /*
    if (webhookSecret) {
      const signature = request.headers.get("X-ZipRecruiter-Signature");
      const timestamp = request.headers.get("X-ZipRecruiter-Signature-Timestamp");

      if (!signature || !timestamp) {
        console.error("Missing signature headers");
        return new Response("OK", { status: 200 }); // Still return 200
      }

      const isValid = await verifySignature(webhookSecret, timestamp, body, signature);
      if (!isValid) {
        console.error("Invalid signature - request may not be from ZipRecruiter");
        return new Response("OK", { status: 200 }); // Still return 200
      }
    }
    */

    // --- Step 3: Make sure we have the job_id to link to the right job ---
    // The job_id ZipRecruiter sends is the referencenumber from your XML feed,
    // which we set to the ApplicantStack Job Serial.
    const jobSerial = body.job_id;

    if (!jobSerial) {
      console.error("No job_id in ZipRecruiter webhook payload:", body);
      return new Response("OK", { status: 200 });
    }

    // --- Step 4: Build the candidate data for ApplicantStack ---
    const candidateData = {
      "Job Serial": jobSerial,
      "First Name": body.first_name || "",
      "Last Name": body.last_name || "",
      "Email": body.email || "",
      "Primary Phone (Cell Phone)": formatPhone(body.phone || ""),
      "Source": "ZipRecruiter",
    };

    // Add profile fields if ZipRecruiter sent them
    if (body.profile) {
      const profile = body.profile;

      // Executive summary / objective as a notes field
      // Note: check your ApplicantStack field names — "Notes" may differ in your account
      if (profile.executive_summary) {
        candidateData["Notes"] = profile.executive_summary;
      }
    }

    // --- Step 5: Post the candidate to ApplicantStack ---
    // If there's a resume attached, we need to use multipart form data (file upload).
    // If no resume, we can use a simpler JSON post.

    let applicantStackResponse;

    if (body.resume) {
      // There is a resume — decode it from base64 and attach it as a file
      applicantStackResponse = await postCandidateWithResume(
        domain,
        token,
        candidateData,
        body.resume
      );
    } else {
      // No resume — simpler JSON post
      applicantStackResponse = await postCandidate(domain, token, candidateData);
    }

    // Log the result from ApplicantStack
    console.log("ApplicantStack response:", applicantStackResponse);

    if (applicantStackResponse["Method Result"] !== "Success") {
      console.error(
        "ApplicantStack rejected the candidate:",
        applicantStackResponse
      );
      // Still return 200 to ZipRecruiter — we don't want them to retry
      // because retrying won't fix an ApplicantStack validation error.
      // Check your Vercel logs to investigate.
    }

    // --- Step 6: Return 200 to ZipRecruiter ---
    // This tells ZipRecruiter "we got it, all good". Must return within a reasonable time.
    return new Response("OK", { status: 200 });

  } catch (error) {
    console.error("Unexpected error in zr-webhook:", error);
    // Return 200 even on unexpected errors so ZipRecruiter doesn't spam retries.
    // Check your Vercel logs if applications aren't showing up in ApplicantStack.
    return new Response("OK", { status: 200 });
  }
}

// --- Helper: Post a candidate without a resume ---
async function postCandidate(domain, token, candidateData) {
  const response = await fetch(
    `https://${domain}.applicantstack.com/api/candidate`,
    {
      method: "POST",
      headers: {
        "Token": token,
        "Publisher": "ZipRecruiter Integration",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(candidateData),
    }
  );

  return response.json();
}

// --- Helper: Post a candidate WITH a resume file attached ---
async function postCandidateWithResume(domain, token, candidateData, base64Resume) {
  // Convert the base64 string to a Buffer (binary data)
  const resumeBuffer = Buffer.from(base64Resume, "base64");

  // Build a multipart form — ApplicantStack requires this format for file uploads
  // The candidate fields go in a "json" key, the file goes in a "file" key
  const formData = new FormData();
  formData.append("json", JSON.stringify(candidateData));

  // Create a Blob (file-like object) from the binary resume data
  const resumeBlob = new Blob([resumeBuffer], { type: "application/pdf" });
  formData.append("file", resumeBlob, "resume.pdf");

  const response = await fetch(
    `https://${domain}.applicantstack.com/api/candidate`,
    {
      method: "POST",
      headers: {
        "Token": token,
        "Publisher": "ZipRecruiter Integration",
        // Note: Do NOT set Content-Type here — the browser sets it automatically
        // with the correct boundary for multipart/form-data
      },
      body: formData,
    }
  );

  return response.json();
}

// --- Helper: Clean up phone number format ---
// ZipRecruiter sends "+1 5555551234", ApplicantStack just wants "5555551234"
function formatPhone(phone) {
  if (!phone) return "";
  // Remove +1 country code and any spaces/dashes
  return phone.replace(/^\+1\s?/, "").replace(/\D/g, "").slice(0, 10);
}

// --- Helper: Verify ZipRecruiter webhook signature ---
// Only needed if you enable signatures with ZipRecruiter (recommended)
async function verifySignature(secret, timestamp, body, receivedSignature) {
  try {
    const encoder = new TextEncoder();
    const bodyString = JSON.stringify(body);
    const message = `${timestamp}.${bodyString}`;

    // Import the secret as a crypto key
    const key = await crypto.subtle.importKey(
      "raw",
      encoder.encode(secret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );

    // Sign the message
    const signatureBuffer = await crypto.subtle.sign(
      "HMAC",
      key,
      encoder.encode(message)
    );

    // Convert to base64
    const computedSignature = btoa(
      String.fromCharCode(...new Uint8Array(signatureBuffer))
    );

    return computedSignature === receivedSignature;
  } catch {
    return false;
  }
}
