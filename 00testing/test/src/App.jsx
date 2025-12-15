import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import From from './components/from'
function App() {
  const [count,setCount]=useState(0)
  const addValue=()=>{
    setCount((prev)=>prev+1)
  }
  
  return (
    <div>
     <button onClick={addValue}>{count}</button>
     <button onClick={addValue}>{count}</button>
     <button onClick={addValue}>{count}</button>
     <button onClick={addValue}>{count}</button>
     <button onClick={addValue}>{count}</button>
    </div>
  )
}

export default App
