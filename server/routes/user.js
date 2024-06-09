const express = require("express");
const { handleUserSignup, handleUserLogin, checkAuth, handleUserInfo, handleLikeBlog, handleDislikeBlog, handleFollow, handleUnfollow } = require("../controllers/user");

const router = express.Router();

router.post("/signup", handleUserSignup);
router.post("/login", handleUserLogin);
router.post("/auth", checkAuth);
router.get("/info/:id", handleUserInfo);
router.patch("/likeBlog/:userId", handleLikeBlog);
router.patch("/dislikeBlog/:userId", handleDislikeBlog);
router.patch("/followAcc/:userId", handleFollow);
router.patch("/unfollowAcc/:userId", handleUnfollow);

module.exports = router;