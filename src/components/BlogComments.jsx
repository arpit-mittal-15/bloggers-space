import { useContext, useEffect, useState } from "react";
import { UserContext } from "./hooks/UserContext";
import { deleteComment } from "./addComment";
import { useParams } from "react-router-dom";

export function BlogComments({commentDetails}){

  const userContextData = useContext(UserContext);
  const {blogId} = useParams();

  const [myComment, setMyComment] = useState(false)
  const [optionVisible, setOptionVisible] = useState(false)

  const commentDate = commentDetails.timestamp;
  const todayDate = Date.now();

  let diff = todayDate - commentDate;
  let dateVariable = "s"

  if(diff > 864000000){
    diff = Math.round(diff/86400000);
    dateVariable = "d"
  }
  else if(diff > 3600000){
    diff = Math.round(diff/3600000);
    dateVariable = "h"
  }
  else if(diff>60000){
    diff = Math.round(diff/60000);
    dateVariable = "m"
  }
  else if(diff> 1000){
    diff= Math.round(diff/1000);
    dateVariable = "s"
  }

  useEffect(() => {
    if(userContextData.id == commentDetails.userId){
      setMyComment(true)
    }
  },[])
  
  const handleShow = () => {
    setOptionVisible(!optionVisible)
  }

  const handleDeleteComment = (e) => {
    console.log("delete button clicked");
    deleteComment(commentDetails._id, blogId)
  }

  return (
    <div className="border-b-[1px] mb-1 pl-2">
      <div className="text-sm pb-1 flex flex-row justify-between">
        <div className="flex flex-row gap-2 items-center">
          <span className="font-semibold">{commentDetails.username}</span>
          <span>
            <svg height={5} width={5} viewBox="0 0 512 512"><path fill="grey" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
          </span>
          <span className="text-slate-500">{diff}{dateVariable}</span>
        </div>
        <div className="relative">
          <span className="pr-5">
            {myComment && 
              <svg height={17} width={17} viewBox="0 0 128 512" onClick={handleShow}><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
            }
          </span>
          <button id="deleteButton" className={`w-[100px] h-[30px] rounded-lg bg-white absolute right-5 top-1 border-2 ${optionVisible? "visible":"hidden"}`} onClick={handleDeleteComment}>
            Delete
          </button>
        </div>
      </div>
      <div className="mb-2 text-lg">{commentDetails.commentContent}</div>
      
    </div>
  )
}