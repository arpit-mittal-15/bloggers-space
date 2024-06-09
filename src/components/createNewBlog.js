export function createNewBlog(blogData){

  return new Promise((resolve, reject) => {
    fetch("https://bloggers-space.onrender.com/api/blog/new-blog", {
      method:"POST",
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blogData)
    })
      .then(res => res.json())
      .then(data => {
        if(data.status == 'blog created'){
          resolve(true);
        }
        else{
          resolve(false)
        }
      })
      .catch(err => {
        console.log(err);
        resolve(false);
      })
  })
}