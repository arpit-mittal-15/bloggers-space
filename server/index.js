require("dotenv").config();

const express = require("express");
const cors = require("cors")
const cookieParser = require("cookie-parser");
const { connectToMongoDB } = require("./connect");

const userRoute = require("./routes/user")
const blogRoute = require("./routes/blog")

const app = express();
const PORT = process.env.PORT;

connectToMongoDB(process.env.MONGO_URL)
.then(()=> console.log("mongoDB connected"));

app.use(cors({origin:"https://bloggers-space.vercel.app"}));
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())

app.use("/api/user", userRoute)
app.use("/api/blog", blogRoute)

app.listen(PORT, ()=> console.log("Server started.."))