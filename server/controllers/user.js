const User = require("../models/user");
// const { setUser } = require("../service/auth")

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

module.exports = {
  handleUserSignup
}