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
  category: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  }
});

favourSchema.virtual('similarFavours', {
  localField: 'category',
  foreignField: 'category',
  ref: 'Favour'
});

favourSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    // console.log(json.similarFavours);
    // console.log(json);
    console.log(doc);
    // json.similarFavours.forEach(el => {
    //   console.log(el);
    // });
  }
});

module.exports = mongoose.model('Favour', favourSchema);
