import { Outlet } from "react-router-dom";

export default function App(){

  return(
    <div className="h-screen w-[101vw]">
      <Outlet/>
    </div>
  )
}