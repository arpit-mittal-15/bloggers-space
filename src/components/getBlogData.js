export function getBlogData(blogId){
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:8000/api/blog/info/${blogId}`,{
      method: 'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        if(data.blogData){
          resolve(data.blogData)
        }
        else if(data.error){
          resolve(data.error)
        }
      })
      .catch(err => console.log(err))
  })
}