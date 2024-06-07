const express = require("express");
const { handleNewBlog, handleMyBlogs } = require("../controllers/blog")

const router = express.Router();

router.post("/new-blog", handleNewBlog);
router.get("/my-blogs/:id", handleMyBlogs);

module.exports = router;