import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignIn(){

  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  })

  const validateUserDetails = () => {
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateUserDetails()){
      fetch('https://bloggers-space.onrender.com/api/user/signup',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDetails),
      })
        .then((res) => res.json())
        .then((data) => {
          if(data.status === 'success'){
            console.log("new user created.");
            navigate("/log-in");
          }
          else if(data.status === 'email already exists'){
            console.log("email already exists")
          }
        })
        .catch((err) => console.log(err))
    }
  }

  return(
    <div className="h-full flex flex-col gap-5 pl-20 justify-center">
      <form className="bg-white flex flex-col w-[350px] p-10 rounded-lg gap-3" 
        onSubmit={handleSubmit}
      >
        <section>
          <label htmlFor="name" className="text-red-500">Name:</label><br/>
          <input type="text" name="name" autoComplete="off" id="name" className="bg-transparent my-3 w-[100%] border-slate-300 border-b-2 focus:outline-none focus:border-slate-500" value={userDetails.username} onChange={(e) => {
            setUserDetails((currentState) => ({...currentState, username: e.target.value}))
          }}/>
        </section>
        <section>
          <label htmlFor="email" className="text-red-500">Email:</label><br/>
          <input type="text" name="email" autoComplete="off" className="my-3 w-[100%] border-slate-300 border-b-2 focus:outline-none focus:border-slate-500" value={userDetails.email} onChange={(e) => {
            setUserDetails((currentState) => ({...currentState, email: e.target.value}))
          }}/></section>
        <section>
          <label htmlFor="name" className="text-red-500">Password:</label><br/>
          <input type="password" name="password" className="my-3 w-[100%] border-slate-300 border-b-2 focus:outline-none focus:border-slate-500" value={userDetails.password} onChange={(e) => {
            setUserDetails((currentState) => ({...currentState, password: e.target.value}))
          }}/>
        </section>
        <button type="submit" className="bg-red-500 text-white w-64 text-center py-3 m-[5px_auto] rounded-md hover:scale-[1.1] transition-all duration-300">Create</button>
      </form>
    </div>
  )
}