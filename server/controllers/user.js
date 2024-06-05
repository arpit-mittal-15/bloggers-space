const User = require("../models/user");
const jwt = require("jsonwebtoken")
const { setUser } = require("../service/auth")

async function handleUserSignup(req, res){
  console.log(req.body);
  const name = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const checkUser = await User.findOne({email});

  if(checkUser){
    return res.json({"status":"email already exists"})
  }

  await User.create({
    name,
    email,
    password,
  });
  return res.json({"status":"success"});
};

async function handleUserLogin(req, res){
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if(!user){
    return res.json({"status": "Invalid email or password"})
  };
  const token = setUser(user);
  // res.cookie("uid", token);
  // return res.redirect("/");

  return res.json({"uid": token});
};

function checkAuth(req, res){

  const token = req.body.uid;
  console.log(token)
  if(!token) return res.json({"status": "not authenticated"});
  const auth = jwt.verify(token, "myblogspace");

  if(auth) return res.json({"status":"authenticated"});
  return res.json({"status": "not authenticated"})
};


module.exports = {
  handleUserSignup,
  handleUserLogin,
  checkAuth
}