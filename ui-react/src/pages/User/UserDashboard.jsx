import React from 'react'
import Navbar from '../../components/Public/Navbar'
import { Link } from 'react-router-dom'
import UserNavbar from '../../components/Public/UserNavbar'

const UserDashboard = () => {
  return (
    <div>
      <UserNavbar/>
    <div>UserDashboard</div>
    <div className='flex flex-row items-center gap-7'>

      <div>
       <Link to="/viewInstitute" className='bg-blue-400 relative h-[300px] w-[300px] flex justify-center'><div className='text-black flex justify-center items-center'>VIEW INSTITUTE</div></Link>
      </div>

      <div >
      <Link to="/viewCourses" className='bg-green-400 relative h-[300px] w-[300px] flex justify-center'><div className='text-black flex justify-center items-center '>VIEW COURSE</div></Link>
      </div>

      <div>
      <Link to="/userProfile" className='bg-red-400 relative h-[300px] w-[300px] flex justify-center'><div className='text-black  flex justify-center items-center'>ADD STUDENT PROFILE</div></Link>
      </div>

      <div>
      <Link to="/viewAdmissionStatus" className='bg-yellow-400 relative h-[300px] w-[300px] flex justify-center'><div className='text-black flex justify-center items-center'>CHECK ADMISSION STATUS</div></Link>
      </div>

      <div>
      <Link to="/makePayment" className='bg-pink-400  h-[300px] w-[300px] flex justify-center'><div className='text-black flex justify-center items-center'>MAKE PAYMENT</div></Link>
      </div>

      <div>
      <Link to="/paymentHistory" className='bg-pink-400  h-[300px] w-[300px] flex justify-center'><div className='text-black flex justify-center items-center'>PAYMENT HISTORY</div></Link>
      </div>

      </div>
    </div>
  )
}

export default UserDashboard
