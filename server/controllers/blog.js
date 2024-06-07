const Blog = require("../models/blog")

async function handleNewBlog(req, res){
  const body = req.body;
  if(!body.title) return res.status(400).json({error: 'title is required'})

  await Blog.create({
    title: body.title,
    content: body.content,
    postedBy: body.id,
  });

  return res.json({"status": "blog created"});
};

async function handleMyBlogs(req, res){
  const userId = req.params.id;
  const blogs = await Blog.find({ postedBy: userId }, {_id:0});
  return res.json({blogs})
}

module.exports = {
  handleNewBlog,
  handleMyBlogs
}