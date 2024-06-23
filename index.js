const express = require("express");

const router = require("./routes/url.js");

const { connectToMongoDB } = require("./connection.js");

const app = express();

const PORT = 8000;

connectToMongoDB("mongodb://127.0.0.1:27017/2url-shortener")
  .then(() => console.log("Connected to MongoDB"));

app.use(express.json());  // Add this line to parse JSON request bodies
app.use('/url', router);

app.listen(PORT, () => console.log(`The Server is running on PORT ${PORT}`));
