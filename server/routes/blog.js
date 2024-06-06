const express = require("express");
const { handleNewBlog } = require("../controllers/blog")

const router = express.Router();

router.post("/new-blog", handleNewBlog);

module.exports = router;