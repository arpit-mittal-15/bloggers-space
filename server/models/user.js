const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  likedPosts: [{ blogId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "blogs"
  }}]
}, { timestamps: true});

const User = mongoose.model("user", userSchema);

module.exports = User;