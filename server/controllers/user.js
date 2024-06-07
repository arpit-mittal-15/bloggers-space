const User = require("../models/user");
const jwt = require("jsonwebtoken")
const { setUser } = require("../service/auth");
const { UNSAFE_useRouteId } = require("react-router-dom");

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

async function checkAuth(req, res){

  const token = req.body.uid;
  if(!token) return res.json({"status": "not authenticated"});
  const auth = jwt.verify(token, "myblogspace");

  if(!auth) {
    return res.json({"status": "not authenticated"})
  }
  else{
    const user = JSON.stringify(auth)
    return res.json(user);
  }
};

async function handleUserInfo(req, res){
  User.findById(req.params.id)
  .then(result => {
    res.status(200).json({
      user: result
    })
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    })
  })
};

async function handleLikeBlog(req, res){
  const userId = req.params.userId;
  const blogId = req.body.id;

  let duplicate = 0;

  await User.findById(userId)
  .then(result => {
    const likedPostsLength = result.likedPosts.length;

    for(i=0; i<likedPostsLength; i++){
      if(result.likedPosts[i].blogId == blogId){
        duplicate+=1;
      }
    }
  });

  if(duplicate === 0){
    const updatedUser = await User.findOneAndUpdate(
      {_id: userId}, 
      {
        $addToSet: {
          likedPosts: {
            blogId: blogId,
          }
        }
      })
  }
  return res.json({"status": "server connected"})
}

module.exports = {
  handleUserSignup,
  handleUserLogin,
  checkAuth,
  handleUserInfo,
  handleLikeBlog
}