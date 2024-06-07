import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "./hooks/UserContext"

export function Header(){

  const userContextData = useContext(UserContext)

  return(
    <header className="box-border bg-red-500 text-white px-10 flex flex-row flex-nowrap justify-between items-center">
        <Link to="/">
        <h1 className="box-border text-3xl relative after:content-[''] after:absolute after:b-[-10px] after:w-0 after:h-[3px] after:bottom-[-5px] after:left-[50%] after:bg-white transition-all after:duration-500 hover:after:w-[100%] hover:after:left-0 cursor-pointer">Blogger's Space</h1>
        </Link>
        <nav className="flex flex-row gap-2 items-center">
          <Link to="/new-blog">
            <div className="font-semibold flex gap-2">
            <span className="h-[30px] border-[1px] rounded-full flex justify-center items-center p-3 py-4">New +</span>
            </div>
          </Link>
          <ul className="flex flex-row gap-5 text-sm px-5">
            <Link to="/"><li>Home</li></Link>
            <Link to="/my-blogs"><li>Blogs</li></Link>
            <li>Msgs</li>
            <li>Notif</li>
          </ul>
          <Link to="/profile">
            <div className="bg-white text-red-500 flex flex-row py-1 px-3 gap-3 rounded-full items-center justify-between">
              <span className="h-[30px] w-[30px] rounded-full border-[2px] flex justify-center items-center">
                <img src="../src/assets/index-background.jpeg" className="h-full w-full rounded-full"/>
                {/* <svg height={20} width={20} viewBox="0 0 448 512"><path fill="#555555" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg> */}
              </span>
              <span>
                {userContextData.name}
              </span>
            </div>
          </Link>
        </nav>
        {/* <nav>
          <ul className="flex flex-row gap-4 relative">
            <Link to="/sign-in">
              <li className="w-20 text-center py-2 relative after:content-[''] after:absolute after:b-[-10px] after:w-0 after:h-[3px] after:bottom-0 after:left-0 after:bg-white transition-all after:duration-500 hover:after:w-[100%]">Signup</li>
            </Link>
            <Link to="/profile">
            <div className="bg-white text-red-500 text-center p-2 px-4 rounded-[20px] flex justify-between gap-3">
              <span>
              <svg height={20} width={20} viewBox="0 0 448 512"><path fill="#555555" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
              </span>
              {userContextData.name}
            </div>
            </Link>
          </ul>
        </nav> */}
      </header>
  )
}