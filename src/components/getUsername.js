export function getUsername(userId){
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:8000/api/user/info/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        resolve(data.user)
      })
      .catch(err => console.log(err))
  })
}