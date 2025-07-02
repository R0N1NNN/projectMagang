require("dotenv").config();

exports.handler = async (event) => {
  let url;
  try {
    const body = JSON.parse(event.body || "{}");
    url = body.url;
    console.log("🔍 Checking URL:", url);
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Permintaan tidak valid" }),
    };
  }

  if (!url) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "URL tidak ditemukan" }),
    };
  }

  const API_KEY = process.env.GOOGLE_SAFE_BROWSING_KEY;
  if (!API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "API key tidak ditemukan" }),
    };
  }

  try {
    const res = await fetch(
      `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client: {
            clientId: "csirt-web-client",
            clientVersion: "1.0.0",
          },
          threatInfo: {
            threatTypes: [
              "MALWARE",
              "SOCIAL_ENGINEERING",
              "UNWANTED_SOFTWARE",
              "POTENTIALLY_HARMFUL_APPLICATION",
            ],
            platformTypes: ["ANY_PLATFORM"],
            threatEntryTypes: ["URL"],
            threatEntries: [{ url }],
          },
        }),
      }
    );

    const result = await res.json();
    console.log("📦 Result:", result);

    return {
      statusCode: 200,
      body: JSON.stringify({ phishing: !!result.matches, raw: result }),
    };
  } catch (err) {
    console.error("❌ Internal error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal error" }),
    };
  }
};
