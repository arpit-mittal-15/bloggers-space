export function likeBlog(userId, blogId){
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:8000/api/user/likeBlog/${userId}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"id": blogId})
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  })
}