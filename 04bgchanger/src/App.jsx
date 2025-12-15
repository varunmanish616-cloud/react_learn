import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
function App() {
  const [colour,setColour]=useState("olive")
  function setBg(value){
    setColour(value)
  }
  return (
   
      <div className='w-full h-screen duration-200' style={{background:colour}}>
      <div className='fixed  flex warp justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-warp justify-center gap-3 bg-white shadow-lg px-3 py-2 rounded-3xl'>
          <button onClick={()=>setColour("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>red</button>
          <button onClick={()=>setColour("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}}>green</button>
          <button onClick={()=>setColour("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}}>blue</button>
      </div>
      </div>
      </div>
      
   
  )
}

export default App
