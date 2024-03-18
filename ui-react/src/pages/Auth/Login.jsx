import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex items-center justify-center  container h-screen w-auto bg-slate-600 '>
      <div className=' text-orange-400 '>
       <span>Login</span>
       <div className='flex  flex-col justify-center gap-5'>
      <input type="text" className='input' placeholder='username'/>
      <input type="password" className='input'placeholder='password'/>
      <Link to="/home"> <button className=' text-center text-green-500 border-black-500  bg-black rounded-xl w-20 h-15' type="submit">Login</button></Link>
      <div className='text-orange-400'>
        <p>
          Dont have an account?<Link to="/register" className='underline text-purple-600'>Register here</Link>{''}
        </p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Login