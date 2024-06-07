const express = require("express");
const { handleNewBlog, handleMyBlogs, handleBlogData } = require("../controllers/blog")

const router = express.Router();

router.post("/new-blog", handleNewBlog);
router.get("/my-blogs/:id", handleMyBlogs);
router.get("/info/:blogId", handleBlogData);

module.exports = router;