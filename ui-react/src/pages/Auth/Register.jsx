import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className=' bg-slate-500  h-screen w-screen flex justify-center items-center '>
      <div className='text-orange-400'>
       Register
      </div>
      <div className='flex justify-center flex-col gap-5 px-2'>
        <input type='text' placeholder='username'/>
        <input type='text' placeholder='email id'/>
        <input type='text' placeholder='password'/>
        <input type='text' placeholder='confirm password'/>
        <input type='text' placeholder='mobile no'/>
        <input type='text' placeholder='role'/>

      </div>
      <div>
       <Link to="/login"><button className='rounded bg-black text-green-500 'type='submit'>Register</button></Link>
      </div>
    </div>

  )
}

export default Register