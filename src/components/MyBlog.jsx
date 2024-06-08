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
  }, []);

  return (
    <div className="h-[93%] w-[96%] overflow-auto flex m-auto flex-col justify-start">
      {myBlogs.map((blog, index) => {
        {if(myBlogs.length == 0){
          return <div>No Blogs</div>
        } else {
          return <div key={index}><MyBlogsBlog blogContent={blog}/></div>
        }}
      })}
    </div>
  )
}