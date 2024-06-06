const Blog = require("../models/blog")

async function handleNewBlog(req, res){
  return res.json({"status":"server connected"})
}

module.exports = {
  handleNewBlog
}