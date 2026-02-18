import React from 'react'
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'
import  Input  from '../Input'
function Signup() {
  const {handleSubmit,register} =useForm()
  const create=async(data)=>{
    console.log(data)
    try {
      await authService.createAccount(data)
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit(create)}>
        <Input
          label='Enter your email'
          {...register("email")}
        />
        <Input
          label='Enter your password'
          {...register("password")}
        />
        <Input
          label='Enter your name'
          {...register("name")}
        />
        <button type='submit'> CREate account</button>
      </form>
    </div>
  )
}

export default Signup