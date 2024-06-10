export function likeBlog(userId, blogId){
  return new Promise((resolve, reject) => {
    fetch(`https://bloggers-space.onrender.com/api/user/likeBlog/${userId}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"id": blogId})
    })
      .then(res => res.json())
      .then(data => data)
      .catch(err => console.log(err))
  })
}

export function dislikeBlog(userId, blogId){
  return new Promise((resolve, reject) => {
    fetch(`https://bloggers-space.onrender.com/api/user/dislikeBlog/${userId}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"id": blogId})
    })
      .then(res => res.json())
      .then(data => data)
      .catch(err => console.log(err))
  })
}