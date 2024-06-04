import { Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { First } from './pages/First.jsx'
import { Home } from './pages/Home.jsx'
import { SignIn } from "./components/SignIn.jsx";
import { LogIn } from "./components/LogIn.jsx";
import { Index } from "./components/Index.jsx";
import { PageNotFound } from "./pages/PageNotFound.jsx";

export default function App(){

  const [loggedIn, setLoggedIn] = useState(false);

  // useEffect(()=> {
  //   checkCookies,
  //   authenticationFetching,
  //   if authenticate then main page otherwise indexpage
  // },[])

  return(
    <div className="h-screen w-[101vw]">
      <Router>
        <Routes>
          {loggedIn && 
            <Route path="/" element={<Home/>}>
              <Route path="/" element={<Home/>}/>
              <Route path="*" element={<PageNotFound/>}/>
            </Route>}
          {!loggedIn && 
            <Route path="/" element={!loggedIn && <First />}>
              <Route path="/" element={<Index/>}/>
              <Route path="/sign-in" element={<SignIn/>} />
              <Route path="/log-in" element={<LogIn/>} />
              <Route path="*" element={<PageNotFound/>}/>
            </Route>}
            
        </Routes>
      </Router>
    </div>
  )
}