const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  }
}, { timestamps: true});

const Blog = mongoose.model("blog", blogSchema);

module.exports = Blog;