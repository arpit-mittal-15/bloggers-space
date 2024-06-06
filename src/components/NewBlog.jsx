import { useState } from "react";
import { createNewBlog } from "./createNewBlog.js";

export function NewBlog(){

  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
  })

  const handleBlogSubmit = (e) => {
    e.preventDefault();
    createNewBlog(blogData);
    console.log("Blog Created")
  }

  return(
    <div className="box-border mr-5 my-5">
      <form className="flex flex-col items-center gap-3">
        <input type="text" name="title" id="title" placeholder="Write the title here.." className="w-[98%] h-[50px] m-auto px-2 border-b-[1px] border-slate-400 rounded-[10px] focus:outline-none" value={blogData.title} onChange={(e) => {
          setBlogData((currentState) => ({...currentState, title: e.target.value}))
        }}/>
        <textarea name="content" id="content" placeholder="Write the content here.." className="w-[98%] min-h-[360px] m-auto p-2 rounded-[10px] focus:outline-none" value={blogData.content} onChange={(e) => {
          setBlogData((currentState) => ({...currentState, content: e.target.value}))
        }}/>
        <button type="submit" className="bg-red-500 text-white w-[200px] m-2 p-2 place-self-end rounded-full hover:scale-105 transition-all duration-300" onClick={handleBlogSubmit}>Create</button>
      </form>
    </div>
  )
}