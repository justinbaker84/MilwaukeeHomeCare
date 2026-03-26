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
      const stage = (job.Stage || "").toLowerCase();
      return stage === "open";
    });

    // --- Step 3: Fetch full job descriptions in parallel ---
    // The jobs list endpoint doesn't include the full description ("Job Listing").
    // We call api/job/JOB_SERIAL for each active job to get it.
    const jobsWithDescriptions = await Promise.all(
      activeJobs.map(async (job) => {
        const description = await fetchJobDescription(domain, token, job["Job Serial"]);
        return { ...job, description };
      })
    );

    // --- Step 4: Build the XML ---
    const jobXml = jobsWithDescriptions
      .map((job) => {
        // Parse location — ApplicantStack returns it as "City, ST"
        const locationParts = (job.Location || "").split(",");
        const city = (locationParts[0] || "").trim();
        const state = (locationParts[1] || "").trim();

        const safeTitle = escapeXml(job["Job Name"] || "");
        const safeCity = escapeXml(city);
        const safeState = escapeXml(state);

        return `
    <job>
      <referencenumber>${escapeXml(job["Job Serial"] || "")}</referencenumber>
      <title>${safeTitle}</title>
      <description><![CDATA[${job.description || safeTitle}]]></description>
      <country>US</country>
      <city>${safeCity}</city>
      <state>${safeState}</state>
      <company>Home Instead</company>
      <date>${escapeXml(job["Create Date"] || "")}</date>

      <!-- No <url> or <email> tag here on purpose!
           Omitting both means candidates use ZipRecruiter Apply,
           and ZipRecruiter sends their info to our webhook. -->

      ${job["Job Type"] ? `<jobtype>${escapeXml(job["Job Type"])}</jobtype>` : ""}
      ${job["Salary Range"] ? buildCompensationXml(job["Salary Range"]) : ""}
    </job>`;
      })
      .join("\n");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<source>
  <publisher>Home Instead</publisher>
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

// --- Helper: Fetch the full job description from ApplicantStack ---
// The jobs list endpoint omits "Job Listing". This calls api/job/JOB_SERIAL
// to get the full record and returns the "Job Listing" field formatted as HTML.
async function fetchJobDescription(domain, token, jobSerial) {
  try {
    const response = await fetch(
      `https://${domain}.applicantstack.com/api/job/${jobSerial}`,
      {
        headers: {
          "Token": token,
          "Publisher": "ZipRecruiter Feed",
        },
      }
    );

    if (!response.ok) {
      console.error(`Failed to fetch description for job ${jobSerial}: ${response.status}`);
      return "";
    }

    const data = await response.json();
    const raw = data["Job Listing"] || "";

    // If ApplicantStack already returned HTML (contains a tag), use it as-is.
    // Otherwise convert plain text to HTML so ZipRecruiter preserves the formatting.
    if (/<[a-z][\s\S]*>/i.test(raw)) {
      return raw;
    }

    return plainTextToHtml(raw);
  } catch (error) {
    console.error(`Error fetching description for job ${jobSerial}:`, error);
    return "";
  }
}

// --- Helper: Convert plain text to simple HTML ---
// Splits on blank lines to make <p> paragraphs, and converts single newlines to <br>.
function plainTextToHtml(text) {
  if (!text) return "";
  return text
    .split(/\n\s*\n/)
    .map((para) => `<p>${para.trim().replace(/\n/g, "<br>")}</p>`)
    .filter((para) => para !== "<p></p>")
    .join("\n");
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
// Handles formats like: "$15-$20/hr", "640-720/week", "$40,000-$60,000"
// ZipRecruiter accepts intervals: Annually, Monthly, Weekly, Daily, Hourly
function buildCompensationXml(salaryRange) {
  try {
    const cleaned = salaryRange.replace(/[$,]/g, "").toLowerCase();

    // Detect the pay interval from keywords in the string
    let interval = "Annually";
    if (/hour|\/hr\b/.test(cleaned)) {
      interval = "Hourly";
    } else if (/week/.test(cleaned)) {
      interval = "Weekly";
    } else if (/day|\/day\b/.test(cleaned)) {
      interval = "Daily";
    } else if (/month/.test(cleaned)) {
      interval = "Monthly";
    }

    // Extract the two numbers separated by a dash
    const match = cleaned.match(/([\d.]+)\s*[-–]\s*([\d.]+)/);
    if (!match) return "";

    const min = parseFloat(match[1]);
    const max = parseFloat(match[2]);

    return `
      <compensation_min>${min.toFixed(2)}</compensation_min>
      <compensation_max>${max.toFixed(2)}</compensation_max>
      <compensation_interval>${interval}</compensation_interval>
      <compensation_currency>USD</compensation_currency>`;
  } catch {
    return ""; // If parsing fails, omit compensation rather than break the feed
  }
}
