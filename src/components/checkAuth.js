export function checkAuth(username){
    // Split cookie string and get all individual name=value pairs in an array
    let cookieArr = document.cookie.split(";");
    
    // Loop through the array elements
    for(let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        
        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if(username == cookiePair[0].trim()) {
            // Decode the cookie value and return
            const value = decodeURIComponent(cookiePair[1]);

            if(value == "John doe"){
              return true
            }
        }
    }
    // Return null if not found
    return false;

}