export function getMyBlogs(userId){
  return new Promise((resolve, reject) => {
    fetch(`https://bloggers-space.onrender.com/api/blog/my-blogs/${userId}`, {
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
};

export function getAllBlogs(){
  return new Promise((resolve, reject) => {
    fetch(`https://bloggers-space.onrender.com/api/blog/all-blogs`, {
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
};