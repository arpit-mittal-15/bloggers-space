import { Outlet } from "react-router-dom"
import { Sidebar } from "./Sidebar"

export function Main(){
  return(
    <main className="h-full overflow-scroll box-border bg-[#e2e2e2] grid grid-flow-col grid-cols-[250px_auto] px-5 items-start content-start">
      <Sidebar/>
      <Outlet/>
    </main>
  )
}