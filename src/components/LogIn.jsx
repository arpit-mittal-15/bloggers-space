import { useState } from "react";
import { useNavigate } from "react-router-dom"

export function LogIn(){

  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    email:"",
    password: "",
  })

  const fetchLogin = () => {
    document.cookie = "username=John doe";
    location.assign("/")
  }

  const validateUserDetails=()=>{
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateUserDetails()){
      fetch('http://localhost:8000/api/user/login',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDetails),
      })
        .then((res) => res.json())
        .then((data) => {
          if(data.uid){
            document.cookie = `uid=${data.uid}`;
            location.assign("/")
          }
          else if(data.status === 'Invalid email or password'){
            console.log("Invalid email or password")
          }
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <div className="h-full flex flex-col gap-5 pl-20 justify-center">
      <form className="bg-white flex flex-col w-[350px] p-10 rounded-lg gap-3"
        onSubmit={handleSubmit}
      >
        <section>
          <label htmlFor="name" className="text-red-500">Email:</label><br/>
          <input type="text" name="email" autoComplete="off" className="my-3 w-[100%] border-slate-300 border-b-2 focus:outline-none focus:border-slate-500" value={userDetails.email} onChange={(e) => {
            setUserDetails((currentState) => ({...currentState, email: e.target.value}))
          }} /></section>
        <section>
          <label htmlFor="name" className="text-red-500">Password:</label><br/>
          <input type="password" name="password" className="my-3 w-[100%] border-slate-300 border-b-2 focus:outline-none focus:border-slate-500" value={userDetails.password} onChange={(e) => {
            setUserDetails((currentState) => ({...currentState, password: e.target.value}))
          }} />
        </section>
        <button type="submit" className="bg-red-500 text-white w-64 text-center py-3 m-[5px_auto] rounded-md hover:scale-[1.1] transition-all duration-300">Login</button>
      </form>
    </div>
  )
}