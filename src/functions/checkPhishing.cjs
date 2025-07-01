require("dotenv").config();
const fetch = require("node-fetch");

exports.handler = async (event) => {
  console.log("📥 Event body:", event.body);

  let url;
  try {
    const body = JSON.parse(event.body || "{}");
    url = body.url;
    console.log("🔍 Checking URL:", url);
  } catch (err) {
    console.error("❌ Gagal parse body:", err);
    return { statusCode: 400, body: JSON.stringify({ error: "Bad Request" }) };
  }

  const API_KEY = process.env.GOOGLE_SAFE_BROWSING_KEY;
  if (!API_KEY) {
    console.error("❌ API key not found in env");
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "API Key missing" }),
    };
  }

  try {
    const response = await fetch(
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

    console.log("📨 Status code:", response.status);
    const text = await response.text();
    console.log("📄 Raw response:", text);

    let result;
    try {
      result = JSON.parse(text);
    } catch (e) {
      console.error("❌ Gagal parse JSON:", e);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Gagal parse response" }),
      };
    }

    console.log("📦 Final result:", result);

    return {
      statusCode: 200,
      body: JSON.stringify({ phishing: !!result.matches, raw: result }),
    };
  } catch (err) {
    console.error("🔥 ERROR during fetch:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal error" }),
    };
  }
};
