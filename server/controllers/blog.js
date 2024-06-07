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
  const blogs = await Blog.find({ postedBy: userId });
  return res.json({blogs})
}

async function handleBlogData(req, res){
  Blog.findById(req.params.blogId)
  .then(result => {
    if(!result){
      res.status(400).json({"status":"blog not found"})
    }
    res.status(200).json({
      blogData: result
    })
  })
  .catch(err => {
    console.log(err);
    res.json({
      error: 'this blog do not exist'
    })
  })
}

module.exports = {
  handleNewBlog,
  handleMyBlogs,
  handleBlogData
}