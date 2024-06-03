import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { Index } from './components/Index.jsx';
import { SignIn } from './components/SignIn.jsx'
import { LogIn } from './components/LogIn.jsx'
import { First } from './pages/First.jsx'

import{ Home } from './pages/Home.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <First/>,
        children:[
          {path: "/", element: <Index/>},
          {path: "/sign-in", element: <SignIn/>},
          {path:"/log-in", element: <LogIn/>},
        ]
      },
    ]
  },
  {
    path:"/home",
    element:<Home/>
  }]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
