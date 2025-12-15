import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/ContactUs/Contact.jsx'
import User from './components/User/User.jsx'
import Github,{githubInfoLoader} from './components/Github/Github.jsx'
// method One to create Route
const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contactUs",
        element:<Contact/>
      },
      {
        path:"user/:userid",
        element:<User/>
      },
      {
        loader:githubInfoLoader,
        path:"github",
        element:<Github/>,
      }
    ]
  }
])
//Method Two to create Route
// const router =createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}>
//      <Route path='' element={<Home/>}/>
//      <Route path='about' element={<About/>}/>
//      <Route path='contactUs' element={<Contact/>}/>
//   </Route>
//   )
  
// )
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
