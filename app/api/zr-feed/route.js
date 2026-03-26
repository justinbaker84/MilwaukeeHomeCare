// app/api/zr-feed/route.js
//
// This endpoint is visited by ZipRecruiter 4x per day.
// It fetches your open jobs from ApplicantStack and returns them
// formatted as XML that ZipRecruiter can read.
//
// Give ZipRecruiter this URL:  https://yourdomain.com/api/zr-feed

export async function GET() {
  try {
    const token = process.env.APPLICANTSTACK_TOKEN;
    const domain = process.env.APPLICANTSTACK_DOMAIN;

    if (!token || !domain) {
      console.error("Missing APPLICANTSTACK_TOKEN or APPLICANTSTACK_DOMAIN environment variables");
      return new Response("Server configuration error", { status: 500 });
    }

    // --- Step 1: Fetch all jobs from ApplicantStack ---
    // ApplicantStack returns 100 jobs per page, so we loop through all pages
    let allJobs = [];
    let currentPage = 1;
    let totalPages = 1; // we'll update this after the first call

    while (currentPage <= totalPages) {
      const response = await fetch(
        `https://${domain}.applicantstack.com/api/jobs/${currentPage}`,
        {
          headers: {
            "Token": token,
            "Publisher": "ZipRecruiter Feed",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`ApplicantStack API error: ${response.status}`);
      }

      const data = await response.json();

      // Update totalPages from the first response
      if (currentPage === 1) {
        totalPages = data.NumPages || 1;
      }

      // Add this page's jobs to our full list
      if (data.Jobs && Array.isArray(data.Jobs)) {
        allJobs = allJobs.concat(data.Jobs);
      }

      currentPage++;
    }

    // --- Step 2: Filter to only open/active jobs ---
    // Adjust this filter based on what your "active" stage is called in ApplicantStack
    // Common values: "Open", "Active", "Approved" — check your ApplicantStack settings
    const activeJobs = allJobs.filter((job) => {
      const status = (job.Status || "").toLowerCase();
      return status === "open";
    });

    // --- Step 3: Build the XML ---
    const jobXml = activeJobs
      .map((job) => {
        // Parse location — ApplicantStack returns it as "City, ST"
        const locationParts = (job.Location || "").split(",");
        const city = (locationParts[0] || "").trim();
        const state = (locationParts[1] || "").trim();

        // Escape any special characters that would break XML
        const safeTitle = escapeXml(job["Job Name"] || "");
        const safeCompany = escapeXml(job["Department"] || "");
        const safeCity = escapeXml(city);
        const safeState = escapeXml(state);

        return `
    <job>
      <!-- The referencenumber is the ApplicantStack Job Serial.
           ZipRecruiter sends this back when someone applies, so we
           know which job to attach the candidate to. -->
      <referencenumber>${escapeXml(job["Job Serial"] || "")}</referencenumber>
      <title>${safeTitle}</title>

      <!-- Description: ApplicantStack's basic job list doesn't include
           the full description. You have two options:
           Option A (simple): Use the job name as a placeholder — then
             edit the description directly in ZipRecruiter after posting.
           Option B (better): Make an extra API call per job to get the
             full listing. See the comment in the code below. -->
      <description><![CDATA[${safeTitle} - ${safeCompany}

Please see the full job description on our website.

OPTION B: To include full descriptions automatically, you would replace
this placeholder with an extra API call:
  fetch https://DOMAIN.applicantstack.com/api/job/JOB_SERIAL
  and use the "Job Listing" field from that response.
Note: This adds one API call per job and may slow the feed for large job counts.
]]></description>

      <country>US</country>
      <city>${safeCity}</city>
      <state>${safeState}</state>
      <company>${safeCompany}</company>
      <date>${escapeXml(job["Create Date"] || "")}</date>

      <!-- No <url> or <email> tag here on purpose!
           Omitting both means candidates use ZipRecruiter Apply,
           and ZipRecruiter sends their info to our webhook. -->

      <!-- Optional fields for better visibility on ZipRecruiter -->
      ${job["Job Type"] ? `<jobtype>${escapeXml(job["Job Type"])}</jobtype>` : ""}
      ${job["Salary Range"] ? buildCompensationXml(job["Salary Range"]) : ""}
    </job>`;
      })
      .join("\n");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<source>
  <publisher>YourCompanyName</publisher>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  ${jobXml}
</source>`;

    // Return the XML with the correct content type
    return new Response(xml, {
      status: 200,
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        // Tell ZipRecruiter not to cache this — always get fresh data
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    });
  } catch (error) {
    console.error("Error generating ZipRecruiter feed:", error);
    return new Response("Error generating feed", { status: 500 });
  }
}

// --- Helper: Escape characters that break XML ---
function escapeXml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// --- Helper: Try to parse ApplicantStack's salary range into ZipRecruiter's format ---
// ApplicantStack stores salary as a string like "40k-60k" or "$40,000 - $60,000"
// ZipRecruiter wants separate min/max numbers and an interval
function buildCompensationXml(salaryRange) {
  try {
    // Remove $ and commas, lowercase
    const cleaned = salaryRange.replace(/[$,]/g, "").toLowerCase();

    // Try to find two numbers separated by a dash
    const match = cleaned.match(/([\d.]+)k?\s*[-–]\s*([\d.]+)k?/);
    if (!match) return "";

    let min = parseFloat(match[1]);
    let max = parseFloat(match[2]);

    // Handle "40k" style shorthand
    if (cleaned.includes("k")) {
      if (min < 1000) min = min * 1000;
      if (max < 1000) max = max * 1000;
    }

    return `
      <compensation_min>${min.toFixed(2)}</compensation_min>
      <compensation_max>${max.toFixed(2)}</compensation_max>
      <compensation_interval>Annually</compensation_interval>
      <compensation_currency>USD</compensation_currency>`;
  } catch {
    return ""; // If parsing fails, just omit compensation rather than break the feed
  }
}
