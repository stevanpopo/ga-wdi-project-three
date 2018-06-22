const mongoose = require('mongoose');

const favourSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  owner: { type: String}
});

module.exports = mongoose.model('Favour', favourSchema);
