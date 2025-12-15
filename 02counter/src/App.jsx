import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setCount]=useState(15);
  function countadd(){
    if(count==20)return
    console.log(count);
    count=count+1;
    setCount(count);
    
  }
  function decValue(){
    if(count==0) return
    setCount(count-1); 
  }
  
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value : {count}</h2>

      <button onClick={countadd}>Add value:{count}</button>
      <button onClick={decValue}>decrease : {count}</button>
    </>
    
  )
}

export default App
