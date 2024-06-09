import { useEffect, useState, createContext, useContext} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { First } from './pages/First.jsx'
import { Home } from './pages/Home.jsx'
import { About } from './components/About.jsx'
import { SignIn } from "./components/SignIn.jsx";
import { LogIn } from "./components/LogIn.jsx";
import { Index } from "./components/Index.jsx";
import { PageNotFound } from "./pages/PageNotFound.jsx";
import { checkAuth } from "./components/checkAuth.js";
import { Main } from './components/Main.jsx';
import { UserContext } from './components/hooks/UserContext.js';
import { NewBlog } from './components/NewBlog.jsx';
import { Explore } from './components/Explore.jsx';
import { MyBlog } from './components/MyBlog.jsx';
import { BlogPage } from './components/BlogPage.jsx';
import { UserProfile } from './components/UserProfile.jsx';

export default function App(){

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({
    id:0,
    name:"",
    email:""
  })
  const {setUserData} = useContext(UserContext);

  useEffect(() => {
    checkAuth("uid").then(value => {
      if(value == false) {setLoggedIn(false)}
      else{
        setLoggedIn(true);
        const userDetails = JSON.parse(value);
        setUser({id: userDetails._id, name: userDetails.name, email: userDetails.email})
        setUserData({id: userDetails._id, name: userDetails.name, email: userDetails.email})
      }
    });
  },[])

  return(
      <div className="h-screen w-[101vw]">
        <Router>
          {loggedIn && 
          <UserContext.Provider value={{...user, setUser: setUser}}>
            <Routes>
              <Route path="/" element={<Home/>}>
                <Route path="/" element={<Main/>}>
                  <Route path='/' element={<Explore/>}/>
                  <Route path='/new-blog' element={<NewBlog/>}/>
                  <Route path='/my-blogs' element={<MyBlog/>}/>
                  <Route path='/blog/:blogId' element={<BlogPage/>} />
                </Route>
                <Route path="/profile/:userId" element={<UserProfile/>}/>
                <Route path="*" element={<PageNotFound/>}/>
              </Route>
            </Routes>
          </UserContext.Provider>
          }
          {!loggedIn && 
            <Routes>
              <Route path="/" element={<First />}>
                <Route path="/" element={<Index/>}/>
                <Route path="/sign-in" element={<SignIn/>} />
                <Route path="/log-in" element={<LogIn/>} />
                <Route path="*" element={<PageNotFound/>}/>
              </Route>
              <Route path="*" element={<PageNotFound/>}/>
            </Routes>
          }
        </Router>
      </div>
  )
}