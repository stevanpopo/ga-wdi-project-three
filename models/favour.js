const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  author: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
});

const favourSchema = new mongoose.Schema({
  title: { type: String, required: true },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  volunteer: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  comments: [commentSchema],
  points: { type: Number, required: true },
  category: { type: mongoose.Schema.ObjectId, ref: 'Category'}
});

module.exports = mongoose.model('Favour', favourSchema);
