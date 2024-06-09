import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { UserContext } from "./hooks/UserContext";
import { followAcc, unfollowAcc } from './followAcc.js'
import { getUsername } from "./getUsername.js";
import { getMyBlogs } from "./getMyBlogs.js";
import { MyBlogsBlog } from "./MyBlogsBlog.jsx";

export function UserProfile(){

  const userContextData = useContext(UserContext)
  const {userId} = useParams()

  const [myAcc, setMyAcc] = useState(false);
  const [following, setFollowing] = useState(false);
  const [userAccountDetails, setUserAcccountDetails] = useState({
    name: "",
    bio: "",
    followers: [],
    following: [],
    blogs: ""
  })

  useEffect(() => {
    if(userContextData.id === userId){
      setMyAcc(true);
    }
  },[]);

  useEffect(() => {
    getUsername(userId).then(user => {
      setUserAcccountDetails({name: user.name, bio: user.shortbio, followers: user.followers, following: user.following})
    })
  },[]);

  const [myBlogs, setMyBlogs] = useState([]);
  const reversedBlogs = myBlogs.reverse();

  useEffect(() => {
    getMyBlogs(userId).then(blogs => {
      blogs.map(blog => setMyBlogs(myBlogs => [...myBlogs, {title: blog.title, content: blog.content, postedBy: blog.postedBy, likes: blog.likes, comments: blog.comments.length, createdAt: blog.createdAt, id: blog._id}]))
    })
  }, []);

  useEffect(() => {
    console.log(userAccountDetails.followers)
    const checkFollow = () => {
      let ifFollow = userAccountDetails.followers?.find((user) => (user.userId === userContextData.id));
      if(ifFollow){
        setFollowing(true)
      }
    }
    checkFollow();
  }, [userAccountDetails])

  const handleFollow = (e) => {
    e.preventDefault();
    followAcc(userContextData.id, userId);
    setFollowing(true)
  }

  const handleUnfollow = (e) => {
    e.preventDefault();
    unfollowAcc(userContextData.id, userId);
    setFollowing(false)
  }

  return (
    <div className="h-full w-full bg-slate-200 flex justify-center overflow-scroll">
      <div className="max-h-[90%] min-w-[400px] max-w-[850px] w-[65vw] m-5 bg-white rounded-lg overflow-scroll">
        <div className="h-[280px] w-full">
          <div>
            <img src="../src/assets/index-background.jpeg" className="w-full h-[200px] rounded-[10px_10px_0px_0px]" />
          </div>
          <div className="relative">
            <img src="../src/assets/index-background.jpeg" className="absolute w-[140px] h-[140px] rounded-full bottom-[-50px] left-[30px] ring-4 ring-white"/>
          </div>
          <div className="relative float-right right-5 top-5">
            {myAcc && <button className="px-10 p-2 bg-red-500 text-white rounded-full hover:scale-105">Edit</button>}
            {!myAcc && !following && <button className="px-10 p-2 bg-red-500 text-white rounded-full hover:scale-105" onClick={handleFollow}>Follow</button>}
            {!myAcc && following && <button className="px-8 p-2 bg-white text-red-500 border-red-500 border-2 rounded-full hover:scale-105" onClick={handleUnfollow}>Following</button>}
          </div>
        </div>
        <div className="px-[30px] pb-[15px]">
          <div className="font-semibold text-2xl mb-1">{userAccountDetails.name}</div>
          <div className="text-lg mb-2">{userAccountDetails.shortbio}</div>
          <div className="grid grid-flow-row grid-cols-3 justify-center items-center mt-7">
            <div className="flex flex-col w-fit items-center pl-3">
              <span className="text-3xl">{myBlogs.length}</span>
              <span className="text-lg">Posts</span>
            </div>
            <div className="flex flex-col w-fit items-center">
              <span className="text-3xl">{userAccountDetails.followers.length}</span>
              <span className="text-lg">Followers</span>
            </div>
            <div className="flex flex-col w-fit items-center">
              <span className="text-3xl">{userAccountDetails.following.length}</span>
              <span className="text-lg">Following</span>
            </div>
          </div>
        </div>
        <div className="px-[30px] py-[15px] border-t-2">
          <div className="font-semibold text-lg">Blogs and Activities</div>
          <div>
            {reversedBlogs.map((blog, index) => {
              if(index < 3){
                return <MyBlogsBlog key={index} blogContent={blog}/>
              }
            })}
          </div>
          <div>Show more..</div>
        </div>
      </div>
    </div>
  )
}