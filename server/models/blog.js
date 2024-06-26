const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  likes: [{ userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  }}],
  comments: [{
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users"
    },
    username: {
      type: String,
      required: true,
    },
    commentContent: {
      type: String,
      required: true,
    },
    timestamp: {
      type: Number,
      required: true,
    }
  }],
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
}, { timestamps: true});

const Blog = mongoose.model("blog", blogSchema);

module.exports = Blog;