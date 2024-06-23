const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  shortID: {
    type: String,
    required: true,
  },
  redirectURL: {
    type: String,
    required: true,
  },
  visitHistory: {
    type: [Date],
    default: [],
  },
});

const URL = mongoose.model('URL', urlSchema);

module.exports = URL;
