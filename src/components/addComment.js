export function addComment(commentData, blogId){
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:8000/api/blog/addComment/${blogId}`, {
      method: "PATCH",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(commentData)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  })
};

export function deleteComment(commentId, blogId){
  return new Promise((resolve,reject) => {
    fetch(`http://localhost:8000/api/blog/deleteComment/${blogId}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"commentId" : commentId})
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  })
}