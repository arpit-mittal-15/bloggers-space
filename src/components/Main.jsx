import { Outlet } from "react-router-dom"
import { Sidebar } from "./Sidebar"

export function Main(){
  return(
    <main className="h-full overflow-scroll box-border bg-[#e2e2e2] grid grid-flow-col grid-cols-[20%_auto] px-5">
      <Sidebar/>
      <Outlet/>
    </main>
  )
}