import { useEffect, useEffectEvent, useState } from 'react'
import {useDispatch} from "react-redux"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css'
import authServices from './appwrite/auth'
import {login,logOut} from './store/authSlice'
import {Outlet} from 'react-router-dom'
function App() {
  const [loading , serLoading]=useState(true)
  const dispatch=useDispatch()
  useEffect(() => {
    authServices.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData }))
      }
      else{
        dispatch(logOut())
      }
    })
    .finally(()=>serLoading(false))
  }, [])
  return (!loading) ? (
    <div className='min-h-screen flex flex-warp content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ) : (null)
}

export default App
