export function createNewBlog(blogData){
  fetch("http://localhost:8000/api/blog/new-blog", {
    method:"POST",
    headers:{
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(blogData)
  })
    .then(res => res.json())
    .then(data => {
      console.log(data.status)
    })
}