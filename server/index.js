const express = require("express");
const cors = require("cors")
const { connectToMongoDB } = require("./connect");

const userRoute = require("./routes/user")
const blogRoute = require("./routes/blog")

const app = express();
const PORT = 8000;

connectToMongoDB("mongodb://127.0.0.1:27017/bloggers-space")
.then(()=> console.log("mongoDB connected"));

app.use(cors({origin:"http://localhost:5173"}));
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use("/api/user", userRoute)
app.use("/api/blog", blogRoute)

app.listen(PORT, ()=> console.log("Server started.."))