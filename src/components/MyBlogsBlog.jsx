export function MyBlogsBlog({blogContent}){
  return (
    <div className="p-4 mb-5 bg-white rounded-lg relative">
      <div id="myBlogsBlogTitle" className="text-2xl font-semibold mb-2">{blogContent[0]}</div>
      <div id="myBlogsBlogContent" className="max-h-[110px] text-lg overflow-hidden text-ellipsis after:content-['Read_more..'] after:block after:h-[40px] after:w-[150px] after:bg-white after:absolute after:bottom-0 after:right-2 after:text-slate-500 after:text-right after:px-3">{blogContent[1]}</div>
    </div>
  )
}