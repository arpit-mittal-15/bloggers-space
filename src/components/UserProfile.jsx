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
            <img src="https://imgs.search.brave.com/28szojQkAFUO3UjNIxySN3CcH1kldouusV2DEqmlv14/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9teS1i/bG9nLXdoaXRlLW5v/dGVib29rLXJlY29y/ZGluZy01NTM5MTky/Ni5qcGc" className="h-[200px] w-full bg-cover"/>
          </div>
          <div className="w-[100px] h-[100px] rounded-full flex justify-center items-center">
            <svg height={30} width={30} viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
          </div>
          <div className="relative float-right right-5 top-5">
            {myAcc && <button className="px-10 p-2 bg-red-500 text-white rounded-full hover:scale-105">Edit</button>}
            {!myAcc && !following && <button className="px-10 p-2 bg-red-500 text-white rounded-full hover:scale-105" onClick={handleFollow}>Follow</button>}
            {!myAcc && following && <button className="px-8 p-2 bg-white text-red-500 border-red-500 border-2 rounded-full hover:scale-105" onClick={handleUnfollow}>Following</button>}
          </div>
        </div>
        <div className="px-[30px] pb-[15px]">
          <div className="font-semibold text-2xl mb-1">{userAccountDetails.name}</div>
          <div className="text-lg mb-2">{userAccountDetails.shortbio?userAccountDetails.shortbio:"shortbio"}</div>
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