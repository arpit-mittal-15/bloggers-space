import { useContext, useState, useEffect } from "react"
import { getMyBlogs } from "./getMyBlogs";
import { UserContext } from "./hooks/UserContext";
import { MyBlogsBlog } from "./MyBlogsBlog";

export function MyBlog(){

  const userContextData = useContext(UserContext)

  const [myBlogs, setMyBlogs] = useState([])

  useEffect(() => {
    getMyBlogs(userContextData.id).then(blogs => {
      blogs.map(blog => setMyBlogs(myBlogs => [...myBlogs, {title: blog.title, content: blog.content, postedBy: blog.postedBy, likes: blog.likes, comments: blog.comments.length, createdAt: blog.createdAt, id: blog._id}]))
    })

    document.getElementById("headerMyBlogs").classList.add("border-b-2");
    document.getElementById("headerHome").classList.remove("border-b-2");
  }, []);

  return (
    <div className="max-h-[95%] h-fit w-[96%] mx-auto my-5 overflow-scroll flex flex-col-reverse">
      {myBlogs.map((blog, index) => {
        return <div key={index}><MyBlogsBlog blogContent={blog}/></div>
      })}
    </div>
  )
}