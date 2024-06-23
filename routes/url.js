const express = require("express");
const {  GenerateNewUrl } = require("../controllers/url.js");

const router = express.Router();

router.post("/", GenerateNewUrl);



module.exports = router;
