const express = require("express");
const router = require("./routes/url.js");
const { connectToMongoDB } = require("./connection.js");
const URL = require("./models/url.js")
const app = express();
const PORT = 8000;

connectToMongoDB("mongodb://127.0.0.1:27017/2url-shortener")
  .then(() => console.log("Connected to MongoDB"));

app.use(express.json());  // Add this line
app.use('/url', router);

app.get('/:shortID', async (req, res) => {
    const shortID = req.params.shortID;
    try {
        const result = await URL.findOneAndUpdate(
            { shortID: shortID },
            { $push: { visitedHistory: Date.now() } },
            { new: true }
        );
        if (result) {
            res.status(200).send(result);
        } else {
            res.status(404).send({ message: 'URL not found' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Server error', error: error.message });
    }
});


app.listen(PORT, () => console.log(`The Server is running on PORT ${PORT}`));
