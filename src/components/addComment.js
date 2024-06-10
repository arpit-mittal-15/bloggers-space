export function addComment(commentData, blogId){
  return new Promise((resolve, reject) => {
    fetch(`https://bloggers-space.onrender.com/api/blog/addComment/${blogId}`, {
      method: "PATCH",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(commentData)
    })
      .then(res => res.json())
      .then(data => {
        resolve(data.addedComment)
      })
      .catch(err => console.log(err))
  })
};

export function deleteComment(commentId, blogId){
  return new Promise((resolve,reject) => {
    fetch(`https://bloggers-space.onrender.com/api/blog/deleteComment/${blogId}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"commentId" : commentId})
    })
      .then(res => res.json())
      .then(data => {
        resolve(true)
      })
      .catch(err => console.log(err))
  })
}