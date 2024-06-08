import { useEffect, useState } from "react"
import { getUsername } from "./getUsername"
import { Link } from 'react-router-dom'

export function MyBlogsBlog({blogContent}){

  const [blogCreator, setBlogCreator] = useState({
    name: "",
    email: "",
  })

  useEffect(() => {
    getUsername(blogContent.postedBy).then(value => {
      setBlogCreator({name: value.name, email: value.email})
    })
  },[]);

  return (
    <div className="p-4 mb-5 bg-white rounded-lg relative">
      <div id="myBlogsBlogTitle" className="text-2xl font-semibold mb-2">{blogContent.title}</div>
      <div id="myBlogsBlogContent" className="max-h-[110px] text-lg overflow-hidden mb-3">{blogContent.content}</div>
      <div className="relative bottom-[-7px] text-sm flex justify-between">
        <div id="blogDetails" className="flex items-center gap-5">
          <span className="flex align-middle gap-2">
            <svg height={17} width={17} viewBox="0 0 512 512" className="inline"><path fill="red" fillOpacity={.9} d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>{blogContent.likes.length}
          </span>
          <span className="flex align-middle gap-2">
          <svg height={17} width={17} viewBox="0 0 512 512"><path fill="red" d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"/></svg>{blogContent.comments}
          </span>
          <span className="flex flex-row items-center gap-2">
            <span className="text-base font-semibold">{blogCreator.name}</span>
            <span className=""><svg height={5} width={5} viewBox="0 0 512 512"><path fill="red" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg></span>
            <span className="text-xs">{blogContent.createdAt.slice(0,10)}</span>
          </span>
        </div>
        <Link to={`/blog/${blogContent.id}`}><div className="text-red-500">Read more..</div></Link>
      </div>
    </div>
  )
}