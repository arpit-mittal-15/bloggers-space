export function followAcc(userId, accToFollow){
  return new Promise((resolve, reject) => {
    fetch(`https://bloggers-space.onrender.com/api/user/followAcc/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"accToFollow": accToFollow})
    })
      .then((res) => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  })
}

export function unfollowAcc(userId, accToUnfollow){
  return new Promise((resolve, reject) => {
    fetch(`https://bloggers-space.onrender.com/api/user/unfollowAcc/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"accToUnfollow": accToUnfollow})
    })
      .then((res) => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  })
}