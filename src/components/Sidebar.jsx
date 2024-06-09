import { useContext } from "react"
import { UserContext } from "./hooks/UserContext"

export function Sidebar(){

  const userContextData = useContext(UserContext);
  const recents = ["The blog", "My blog", "Your blog"]

  return (
    <div className="box-border m-5 rounded-lg">
      <div id="card-profile" className="w-full h-[280px] bg-white rounded-lg">
        <div id="card-profile-img-bg" className="h-[80px] w-full bg-red-500 rounded-[10px_10px_0px_0px]">
          <div className="h-[70px] w-[70px] rounded-full bg-[url('./assets/index-background.jpeg')] bg-cover ring-2 ring-white m-auto relative bottom-[-40px]"></div>
        </div>
        <div id="name-short-bio" className="relative top-[40px] text-center">
          <div className="font-semibold text-xl mb-1">{userContextData.name}</div>
          <div className="text-sm">{userContextData.bio?userContextData.bio:"shortbio"}</div>
        </div>
        <div id="followers" className="relative top-[40px] border-y-[1px] border-red-500 px-4 py-3 mt-5 flex justify-between text-sm">
          <span>Followers</span>
          <span className="font-semibold">{userContextData.followers?userContextData.followers:"0"}</span>
        </div>
        <div className="relative top-[40px] border-red-500 py-3 px-4 flex justify-between text-sm">
          <span>Your favs</span>
          <span><svg height={18} width={18} viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
          </span>
        </div>
      </div>
      <div id="recents" className="box-border w-full bg-white rounded-lg p-2 my-2">
        <div id="recent-heading" className="text-xs px-1">Recent</div>
        <div id="recent-content" className="my-3">
          {recents.map((recent, index) => {
            return <div key={index} className="my-2 text-sm"><svg height={15} width={15} viewBox="0 0 384 512" className="inline ml-1 mr-2"><path fill="red" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>{recent}</div>
          })}
        </div>
      </div>
    </div>
  )
}