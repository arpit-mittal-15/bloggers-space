import { useParams } from "react-router-dom"

export function UserProfile(){

  const {userId} = useParams()
  return (
    <div className="h-full w-full bg-slate-200 flex justify-center">
      <div className="h-fit min-w-[400px] max-w-[850px] w-[65vw] m-5 bg-red-500">
        {userId}
      </div>
    </div>
  )
}