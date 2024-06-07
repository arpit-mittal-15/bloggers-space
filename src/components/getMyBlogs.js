export function getMyBlogs(userId){
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:8000/api/blog/my-blogs/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        resolve(data.blogs)
      })
      .catch(err => console.log(err))
  })
}