const express = require("express");
const { handleUserSignup, handleUserLogin, checkAuth, handleUserInfo, handleLikeBlog } = require("../controllers/user");

const router = express.Router();

router.post("/signup", handleUserSignup);
router.post("/login", handleUserLogin);
router.post("/auth", checkAuth);
router.get("/info/:id", handleUserInfo);
router.patch("/likeBlog/:userId", handleLikeBlog);

module.exports = router;