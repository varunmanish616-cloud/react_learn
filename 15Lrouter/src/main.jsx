import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/Home/Home.jsx'
import One from './components/One.jsx'
import Two from './components/Two.jsx'
import Three from './components/Three.jsx'
import Four from './components/Four.jsx'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:"/one",
        element:<One/>
      },
      {
        path:"/Two",
        element:<Two/>
      },
      {
        path:"/Three",
        element:<Three/>
      },
      {
        path:"/Four",
        element:<Four/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
) 
