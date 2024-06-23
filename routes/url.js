const express = require("express");
const { GenerateNewUrl } = require("../controllers/url.js");  // Ensure this matches the named export

const router = express.Router();

router.post("/", GenerateNewUrl);

module.exports = router;
