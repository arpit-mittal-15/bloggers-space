require("dotenv").config();

const express = require("express");
const cors = require("cors")
const cookieParser = require("cookie-parser");
const { connectToMongoDB } = require("./connect");

const userRoute = require("./routes/user")
const blogRoute = require("./routes/blog")

const app = express();
app.use(function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  const allowedOrigins = ['http://localhost:3000', 'http://gamebrag.onrender.com', 'https://bloggers-space.vercel.app'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
  next();
});
const PORT = process.env.PORT;

connectToMongoDB(process.env.MONGO_URL)
.then(()=> console.log("mongoDB connected"));

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())

app.use("/api/user", userRoute)
app.use("/api/blog", blogRoute)

app.listen(PORT, ()=> console.log("Server started again.."))