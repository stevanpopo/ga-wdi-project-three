const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  author: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
});

const favourSchema = new mongoose.Schema({
  title: { type: String, required: true },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  volunteers: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  chosen_volunteers: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  status: { type: String },
  comments: [commentSchema],
  points: { type: Number, required: true },
  category: { type: String, required: true }
});

module.exports = mongoose.model('Favour', favourSchema);
