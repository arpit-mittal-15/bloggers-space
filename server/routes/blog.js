const express = require("express");
const { handleNewBlog, handleMyBlogs, handleAllBlogs, handleBlogData, handleNewComment, handleDeleteComment } = require("../controllers/blog")

const router = express.Router();

router.post("/new-blog", handleNewBlog);
router.get("/my-blogs/:id", handleMyBlogs);
router.get("/all-blogs", handleAllBlogs);
router.get("/info/:blogId", handleBlogData);
router.patch("/addComment/:blogId", handleNewComment);
router.patch("/deleteComment/:blogId", handleDeleteComment);

module.exports = router;