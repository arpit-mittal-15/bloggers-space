import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getBlogData } from "./getBlogData";
import { likeBlog } from "./likeBlog";
import { UserContext } from "./hooks/UserContext";

export function BlogPage(){

  const {blogId} = useParams();
  const userContextData = useContext(UserContext);

  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
    likes: [],
    comments: 0,
    createdAt: "",
    postedBy: ""
  })

  useEffect(() => {
    getBlogData(blogId).then(value => {
      if(value !== 'this blog do not exist'){
        setBlogData({title: value.title, content: value.content, likes: value.likes, comments: value.comments, createdAt: value.createdAt, postedBy: value.postedBy});
      }
    })
  },[])

  const handleLike = (e) => {
    e.preventDefault;
    likeBlog(userContextData.id, blogId);
  }

  return(
    <div className="h-fit w-[95%] flex flex-col justify-self-center bg-white rounded-xl mt-5">
      <div className="h-[200px]">
        <img src="../src/assets/index-background.jpeg" alt="bg-image" className="h-full w-full rounded-[10px_10px_0px_0px]"/>
      </div>
      <div>
        <div className="font-semibold text-3xl m-3">{blogData.title}</div>
        <div className="text-xl m-3">{blogData.content}</div>
      </div>
      <div className="bg-red-500 my-5">
        <span className="bg-blue-500" onClick={handleLike}>Likes</span>
      </div>
    </div>
  )
}