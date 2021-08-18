const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  text: String,
  hashtag: String,
  userId: {type: mongoose.Schema.ObjectId, ref:"user"},
  date:{type: Date, default: Date.now },
});

const post = mongoose.model("post", postSchema);
module.exports = post;