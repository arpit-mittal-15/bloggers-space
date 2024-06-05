import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function Home(){
  return(
    <>
      <div className="h-screen grid grid-flow-row grid-rows-[8%_auto_6%]">
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </>
  )
}