const mongoose = require('mongoose');

const favourSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Favour', favourSchema);
