export function checkAuth(uid){

  return new Promise((resolve, reject) => {
    let token = "";
    let cookieArr = document.cookie.split(";");
    for(let i = 0; i < cookieArr.length; i++) {
      let cookiePair = cookieArr[i].split("=");
        
      if(uid === cookiePair[0].trim()) {
        token = decodeURIComponent(cookiePair[1]);
      }
    }
    const cookie = {"uid": token};
    
    fetch('http://localhost:8000/api/user/auth',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cookie),
    })
    .then(response => response.json())
    .then(data => {
      if(data.status === "not authenticated"){
        console.log("authentication failed");
        resolve(false);
      } else if(data.status === 'authenticated'){
        console.log("Authenticated");
        resolve(true);
      } else {
        console.log("Unknown authentication status");
        resolve(false);
      }
    })
    .catch(error => {
      console.error('Error during authentication check:', error);
      resolve(false);
    });
  });
}