const shortid = require('shortid');


async function GenerateNewUrl (req, res) {
    console.log(shortid.generate());
}