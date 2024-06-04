import { Outlet } from "react-router-dom";

export function Home(){
  return(
    <>
      <div>
        This is home page
        <Outlet/>
      </div>
    </>
  )
}