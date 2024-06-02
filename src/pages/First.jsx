import { Outlet, Link, useNavigate } from "react-router-dom"

export function First(){
  return(
    <div id="firstPage" className="h-full grid grid-flow-row grid-rows-[10%_auto_18%] bg-[url('../../assets/index-background.jpeg')] bg-cover">
      <header className="box-border text-white px-10 flex flex-row flex-nowrap justify-between items-center">
        <h1 className="box-border text-3xl relative after:content-[''] after:absolute after:b-[-10px] after:w-0 after:h-[3px] after:bottom-[-5px] after:left-0 after:bg-white transition-all after:duration-500 hover:after:w-[100%]">Blogger's Space</h1>
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
      <main>
        <Outlet/>
      </main>
      <footer className="box-border bg-white flex flex-row justify-between items-center px-10">
        <div className="flex flex-row justify-stretch gap-20">
          <div className="flex flex-col">
            <span className="text-xl pb-3 font-semibold">Help</span>
            <span>Help Center</span>
            <span>Help Forum</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl pb-3 font-semibold">Developers</span>
            <span>API</span>
            <span>Dev Forum</span>
          </div>
        </div>
        <div>
          <ul className="flex flex-row justify-stretch gap-10">
            <li>gitHub</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </footer>
    </div>
  )
}