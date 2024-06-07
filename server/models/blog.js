const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  }],
  comments: {
    type: Number,
    default:0
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
}, { timestamps: true});

const Blog = mongoose.model("blog", blogSchema);

module.exports = Blog;