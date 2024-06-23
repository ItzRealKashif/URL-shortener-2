const shortid = require("shortid");
const URL = require("../models/url");

async function GenerateNewUrl(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  const shortID = shortid.generate();  // Use shortid.generate()

  await URL.create({
    shortID: shortID,  // Ensure this matches the model definition
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.json({ id: shortID });
}

module.exports = { GenerateNewUrl };
