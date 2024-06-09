import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { UserContext } from "./hooks/UserContext";
import { followAcc, unfollowAcc } from './followAcc.js'

export function UserProfile(){

  const userContextData = useContext(UserContext)
  const {userId} = useParams()

  const [myAcc, setMyAcc] = useState(false);
  const [following, setFollowing] = useState(false)

  useEffect(() => {
    if(userContextData.id === userId){
      setMyAcc(true);
    }
  },[]);

  const handleFollow = (e) => {
    e.preventDefault();
    followAcc(userContextData.id, userId);
    setFollowing(true)
  }

  const handleUnfollow = (e) => {
    e.preventDefault();
    unfollowAcc(userContextData.id, userId);
    setFollowing(false)
  }

  return (
    <div className="h-full w-full bg-slate-200 flex justify-center">
      <div className="h-fit min-w-[400px] max-w-[850px] w-[65vw] m-5 bg-white rounded-lg">
        <div className="h-[280px] w-full">
          <div>
            <img src="../src/assets/index-background.jpeg" className="w-full h-[200px] rounded-[10px_10px_0px_0px]" />
          </div>
          <div className="relative">
            <img src="../src/assets/index-background.jpeg" className="absolute w-[140px] h-[140px] rounded-full bottom-[-50px] left-[30px] ring-4 ring-white"/>
          </div>
          <div className="relative float-right right-5 top-5">
            {myAcc && <button className="px-10 p-2 bg-red-500 text-white rounded-full hover:scale-105">Edit</button>}
            {!myAcc && !following && <button className="px-10 p-2 bg-red-500 text-white rounded-full hover:scale-105" onClick={handleFollow}>Follow</button>}
            {!myAcc && following && <button className="px-8 p-2 bg-white text-red-500 border-red-500 border-2 rounded-full hover:scale-105" onClick={handleUnfollow}>Following</button>}
          </div>
        </div>
        <div className="px-[30px] pb-[15px]">
          <div className="font-semibold text-2xl mb-1">Namee</div>
          <div className="text-lg mb-2">Bio: Blog is routine Blog is routine Blog is routine Blog is routine</div>
          <div className="grid grid-flow-row grid-cols-3 justify-center items-center mt-7">
            <div className="flex flex-col w-fit items-center pl-3">
              <span className="text-3xl">23</span>
              <span className="text-lg">Posts</span>
            </div>
            <div className="flex flex-col w-fit items-center">
              <span className="text-3xl">23</span>
              <span className="text-lg">Followers</span>
            </div>
            <div className="flex flex-col w-fit items-center">
              <span className="text-3xl">23</span>
              <span className="text-lg">Following</span>
            </div>
          </div>
        </div>
        <div className="px-[30px] py-[15px] border-t-2">
          <div className="font-semibold text-lg">Blogs and Activities</div>
          <div>Blogs</div>
          <div>Show more..</div>
        </div>
      </div>
    </div>
  )
}