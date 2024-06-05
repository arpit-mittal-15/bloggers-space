import { useEffect, useState} from 'react';
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

export default function App(){

  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    checkAuth("uid").then(value => setLoggedIn(value));
  },[])

  return(
      <div className="h-screen w-[101vw]">
        <Router>
          {loggedIn && 
            <Routes>
              <Route path="/" element={<Home/>}>
                <Route path="/" element={<Main/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="*" element={<PageNotFound/>}/>
              </Route>
            </Routes>
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