import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { getBlogData } from "./getBlogData";
import { likeBlog, dislikeBlog } from "./likeBlog";
import { UserContext } from "./hooks/UserContext";
import { getUsername } from './getUsername'
import { BlogComments } from "./BlogComments";
import { addComment } from "./addComment";

export function BlogPage(){

  const {blogId} = useParams();
  const userContextData = useContext(UserContext);

  const [blogData, setBlogData] = useState({});
  const [blogCreator, setBlogCreator] = useState({
    name: "",
    email: "",
  });
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0)
  const [newComment, setNewComment] = useState({
    username: userContextData.name,
    email: userContextData.email,
    userId: userContextData.id,
    comment: "",
  })

  useEffect(() => {
    getBlogData(blogId).then(blog => {
      if(blog !== 'this blog do not exist'){
        setBlogData({title: blog.title, content: blog.content, likes: blog.likes, comments: blog.comments, createdAt: blog.createdAt, postedBy: blog.postedBy});
      }
    })
  },[]);

  useEffect(() => {
    getUsername(blogData.postedBy).then(value => {
      setBlogCreator({name: value.name, email: value.email})
    })
  }, [blogData])

  const handleLike = (e) => {
    e.preventDefault();
    if(!liked){
      likeBlog(userContextData.id, blogId);
      setLiked(true);
      setLikes((current) => (current + 1))
      // setBlogData((current) => ({...current, likes: blogData.likes.push({userId: '', _id:''})}))
    }
    else{
      dislikeBlog(userContextData.id, blogId);
      setLiked(false)
      setLikes((current) => (current - 1))
    }
  }

  useEffect(() => {
    const checkLike = () => {
      let like = blogData.likes?.find(data => data.userId === userContextData.id);
      setLikes(blogData.likes?.length);
      if(like){
        setLiked(true);
      }
    }
    checkLike();
  },[blogData]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if(newComment.comment === ""){
      document.getElementById("commentInput").classList.add("border-red-500")
    }
    else{
      addComment(newComment, blogId).then(addedComment => {
        console.log(addedComment);
        blogData.comments.push(addedComment)
      });
      setNewComment((current) => ({...current, comment: ""}));
    };
  }
  

  return(
    <div className="max-h-[94%] h-fit w-[95%] flex flex-col justify-self-center bg-white rounded-xl my-5 overflow-scroll scroll-mb-3">
      <div className="h-[200px]">
        <img src="https://imgs.search.brave.com/cHxstcx3lDm2fYz1dU0V7PO69DT2GcfK2WONQIr1GqE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzBkLzg0/LzhjLzBkODQ4YzMy/ZDExODEwMTFmYmE5/ZmVjMThlNDYxNTMx/LmpwZw" alt="bg-image" className="h-full w-full rounded-[10px_10px_0px_0px]"/>
      </div>
      <div>
        <div className="font-semibold text-3xl m-3 mb-0">{blogData.title}</div>
        <div className="text-right mx-5 text-slate-600">
          -<Link to={`/profile/${blogData.postedBy}`}>{blogCreator.name}</Link>
        </div>
        <p className="text-xl my-3 ml-4 mr-5 text-justify whitespace-pre-line">{blogData.content}</p>
      </div>
      <div className="my-5 mx-4 flex flex-row justify-between border-b-2 pb-5">
        <span className="w-fit flex flex-row items-center gap-4">
        <span className="w-fit flex flex-row items-center gap-2" onClick={handleLike}>
          {liked?<svg height={20} width={20} viewBox="0 0 512 512" className="cursor-pointer"><path fill="red" fillOpacity={.9} d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>:<svg height={20} width={20} viewBox="0 0 512 512" className="cursor-pointer"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>}
          {likes}
        </span>
        <span className="w-fit">
          <a href="#comments" className="flex flex-row items-center gap-2">
            <svg height={20} width={20} viewBox="0 0 512 512"><path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"/></svg>
            {blogData.comments?.length}
          </a>
        </span>
        </span>
        <span className="text-sm place-content-center text-slate-700 mr-2">{blogData.createdAt?.slice(0,10)}</span>
      </div>
      <div id="comments" className="px-4">
        <span className="font-semibold">Comments</span>
        <div>
          <form className="w-full grid grid-flow-row grid-cols-[auto_100px] py-2" onSubmit={handleCommentSubmit}>
            <input type="text" id="commentInput" placeholder="Add a comment..." className="my-2 border-b-2 focus:outline-none pl-2" value={newComment.comment} onChange={(e) => {
              setNewComment((current) => ({...current, comment: e.target.value}))
            }}/>
            <button type="submit" className="bg-red-500 text-white rounded-full w-[90%] h-fit px-1 py-1 justify-self-end">Post</button>
          </form>
        </div>
        <div className="flex flex-col-reverse gap-3">
          {blogData.comments?.map((commentDetails, index) => {
            return <BlogComments key={index} commentDetails={commentDetails}/>
          })}
        </div>
      </div>
    </div>
  )
}