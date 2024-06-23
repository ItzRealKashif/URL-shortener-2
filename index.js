const express = require("express");

const urlRouter = require("./routes/url.js")

const {connectToMongoDB} = require("./connection.js")

const app = express();

const PORT = 8000;

connectToMongoDB("mongodb://127.0.0.1:27017/2url-shortener")
.then( () => console.log("Connected to MongoDB"))

app.use('/url', urlRouter)

app.listen(PORT, () => console.log(`The Server is running on PORT ${PORT}`))