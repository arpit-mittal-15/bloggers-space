import { Explore } from "./Explore"
import { Sidebar } from "./Sidebar"

export function Main(){
  return(
    <main className="box-border bg-[#e2e2e2] grid grid-flow-col grid-cols-[20%_80%] px-5">
      <Sidebar/>
      <Explore/>
    </main>
  )
}