const express = require("express");

const urlRouter = require("./routes/url.js")

const app = express();

const PORT = 8000;

app.use('/url', urlRouter)

app.listen(PORT, () => console.log(`The Server is running on PORT ${PORT}`))