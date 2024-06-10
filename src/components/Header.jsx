import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "./hooks/UserContext"

export function Header(){

  const userContextData = useContext(UserContext);
  const [profileOptionsVisible, setProfileOptionsVisible] = useState(false);
  const [cursorOnOptions, setCursorOnOptions] = useState(false)

  function deleteCookies() { 
    var allCookies = document.cookie.split(';'); 
    
    // The "expire" attribute of every cookie is  
    // Set to "Thu, 01 Jan 1970 00:00:00 GMT" 
    for (var i = 0; i < allCookies.length; i++) {
        document.cookie = allCookies[i] + "=;expires=" 
        + new Date(0).toUTCString(); 
    }
    location.assign("/")
  };

  return(
    <header className="box-border bg-red-500 text-white px-10 flex flex-row flex-nowrap justify-between items-center">
        <Link to="/">
        <h1 className="box-border text-3xl relative after:content-[''] after:absolute after:b-[-10px] after:w-0 after:h-[3px] after:bottom-[-5px] after:left-[50%] after:bg-white transition-all after:duration-500 hover:after:w-[100%] hover:after:left-0 cursor-pointer">Blogger's Space</h1>
        </Link>
        <nav className="flex flex-row gap-2 items-center">
          <Link to="/new-blog">
            <div className="font-semibold flex gap-2">
            <span className="h-[30px] border-[1px] rounded-full flex justify-center items-center p-3 py-4 hover:scale-105 transition-all duration-500">New +</span>
            </div>
          </Link>
          <ul className="flex flex-row gap-5 text-sm px-5">
            <Link to="/"><li id="headerHome">Home</li></Link>
            <Link to="/my-blogs"><li id="headerMyBlogs">My Blogs</li></Link>
            <li onClick={() => alert("under progress")}>Msgs</li>
            <li onClick={() => alert("under progress")}>Notif</li>
          </ul>
            <div className="bg-white text-red-500 flex flex-row py-1 px-3 gap-3 rounded-full items-center justify-between relative cursor-pointer" onMouseEnter={() => setProfileOptionsVisible(true)} onMouseLeave={() => {
              setTimeout(() => {
                if(cursorOnOptions == false){setProfileOptionsVisible(false)}
              },1000)
            }}>
              <span className="h-[30px] w-[30px] rounded-full border-[2px] flex justify-center items-center">
              <svg height={15} width={15} viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
              </span>
              <span>
                {userContextData.name}
              </span>
              <span className={`absolute w-[200px] bg-white text-black p-2 px-5 bottom-[-210px] shadow-[0px_3px_10px_#000000] right-2 rounded-lg after:content-[''] after:absolute after:h-5 after:w-5 after:bg-white after:top-[-7px] after:right-[10px] after:rotate-45 flex flex-col gap-2 ${profileOptionsVisible? "visible":"hidden"}`} onMouseEnter={() => setCursorOnOptions(true)} onMouseLeave={() => {
                setTimeout(() => {setProfileOptionsVisible(false)}, 200)
              }}>
                <div className="border-b-2 pb-3 flex flex-col gap-2">
                  <div onClick={() => {location.assign(`/profile/${userContextData.id}`)}}>View Profile</div>
                  <Link to="/my-blogs"><div>Blogs and activities</div></Link>
                </div>
                <div className="border-b-2 pb-3 flex flex-col gap-2">
                  <div className="text-xs">Settings(under progress)</div>
                  <div>Help(under progress)</div>
                </div>
                <div className="text-red-500" onClick={deleteCookies}>Log out</div>
              </span>
            </div>
        </nav>
      </header>
  )
}