import React from 'react'
import Navbar from '../components/Public/Navbar'
import image from '../assets/images/student-college.jpg'
import UserNavbar from '../components/Public/UserNavbar'
const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
      <div className='text-purple-400 text-center w-screen h-screen text-7xl flex justify-center items-center' >WELCOME TO ONLINE COLLEGE ADMISSION PORTAL</div>
            <img src={image} className='mb-10px' alt="img"/>
        </div>
    </div>
  )
}

export default Home