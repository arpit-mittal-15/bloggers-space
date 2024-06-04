import React,{useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { Index } from './components/Index.jsx';
import { SignIn } from './components/SignIn.jsx'
import { LogIn } from './components/LogIn.jsx'
import { First } from './pages/First.jsx'

import{ Home } from './pages/Home.jsx'

// const loggedIn = false;

// const firstPage = [{
//   path:"/",
//   element: <App/>,
//   children:[
//     {
//       path: "/",
//       element: <First/>,
//       children:[
//         {path: "/", element: <Index/>},
//         {path: "/sign-in", element: <SignIn/>},
//         {path:"/log-in", element: <LogIn/>},
//       ]
//     },
//   ]
// }];

// const mainPage = [{
//   path:"/",
//   element: <App/>,
//   children:[
//     {path: "/", element: <Home/> },
//     {path: "/sign-in", element: <SignIn/>},
//     {path: "/log-in", element: <LogIn/>}
//   ]
// }];


// let router;

// if(loggedIn == true){
//   router = createBrowserRouter(mainPage)
// }
// else{
//   router = createBrowserRouter(firstPage)
// }


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
