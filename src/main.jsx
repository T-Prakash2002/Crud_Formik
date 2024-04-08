import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './components/Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import './index.css'
import DashBoard from './components/DashBoard.jsx';
import Create from './components/Create.jsx';



const router=createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
        
          {
                path:'home',
                element:<Home />
            },
            {
                path:'dashboard',
                element:<DashBoard />
            },
            {
                path:'create',
                element:<Create />
            },
            ]
         }
        ]
)

ReactDOM.createRoot(document.getElementById('root')).render(

   <RouterProvider router={router} />
  
)
