import { Outlet, Link, useNavigate } from "react-router-dom"

export function Index(){
  return(
    <div className="h-full text-white flex flex-col gap-5 pl-10 justify-center">
      <span className="text-4xl">Publish your passions your way</span>
      <span className="text-xl">Create a unique and beautiful blog easily.</span>
      <Link to="/sign-in">
        <div className="bg-red-500 w-64 text-center py-3 my-5 rounded-md hover:scale-[1.1] transition-all duration-300">CREATE YOUR BLOG</div>
      </Link>
    </div>
  )
}