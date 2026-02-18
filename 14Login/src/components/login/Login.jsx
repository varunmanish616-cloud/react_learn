import React from 'react'
import Input from '../Input'
import {useForm} from 'react-hook-form'
function Login() {
    const {handleSubmit,register} =useForm()
    const onSubmit=(data)=>{
        console.log(data)
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Input
        label="Enter your Email"
        placeholder="enter your Email"
        type="email"
        {...register("email")}
        ></Input>
        <Input
        label="Enter your Password"
        placeholder="enter your Password"
        type="Password"
        {...register("password")}
        ></Input>
        <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login


