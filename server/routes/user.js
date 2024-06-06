const express = require("express");
const { handleUserSignup, handleUserLogin, checkAuth } = require("../controllers/user");

const router = express.Router();

router.post("/signup", handleUserSignup);
router.post("/login", handleUserLogin);
router.post("/auth", checkAuth);

module.exports = router;