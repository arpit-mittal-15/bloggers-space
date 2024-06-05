import { Link } from "react-router-dom"

export function Header(){
  return(
    <header className="box-border bg-red-500 text-white px-10 flex flex-row flex-nowrap justify-between items-center">
        <Link to="/">
        <h1 className="box-border text-3xl relative after:content-[''] after:absolute after:b-[-10px] after:w-0 after:h-[3px] after:bottom-[-5px] after:left-[50%] after:bg-white transition-all after:duration-500 hover:after:w-[100%] hover:after:left-0 cursor-pointer">Blogger's Space</h1>
        </Link>
        <nav>
          <ul className="flex flex-row gap-4 relative">
            <Link to="/sign-in">
              <li className="w-20 text-center py-2 relative after:content-[''] after:absolute after:b-[-10px] after:w-0 after:h-[3px] after:bottom-0 after:left-0 after:bg-white transition-all after:duration-500 hover:after:w-[100%]">Signup</li>
            </Link>
            <Link to="/log-in">
            <li className="w-20 bg-red-500 text-center py-2 rounded-md hover:scale-[1.1] transition-all duration-300">Login</li>
            </Link>
          </ul>
        </nav>
      </header>
  )
}