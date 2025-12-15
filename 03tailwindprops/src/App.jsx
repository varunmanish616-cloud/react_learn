import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)
  let myobj={
    name:"manish",
    age:'21'
  }
  let myArr=[1,2,3,4,"manish"]
  return (
    <>
      <h1 className='bg-green text-black p-4 rounded-2xl mb-4'>Tailwind test</h1>
      <Card username="Manish" btnText="click me"/>
      <Card username="Varun" btnText="visit me"/>
    </>
  )
}

export default App
