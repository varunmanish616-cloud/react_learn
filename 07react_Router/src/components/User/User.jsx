import React from 'react'
import { use } from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid}=useParams()
  return (
    <div className='flex items-center justify-center font-sans text-3xl p-4'>User : {userid} </div>
  )
}

export default User