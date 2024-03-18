import React from 'react'
import Navbar from '../../components/Public/Navbar'
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <div>
      <Navbar/>
    <div>AdminDashboard</div>
    <div className='flex flex-row items-center gap-7'>

      <div>
       <Link to="/addInstitute" className='bg-blue-400 relative h-[300px] w-[300px] flex justify-center'><div className='text-black flex justify-center items-center'>ADD INSTITUTE</div></Link>
      </div>

      <div >
      <Link to="/addCourse" className='bg-green-400 relative h-[300px] w-[300px] flex justify-center'><div className='text-black flex justify-center items-center '>ADD COURSE</div></Link>
      </div>

      <div>
      <Link to="/studentList" className='bg-red-400 relative h-[300px] w-[300px] flex justify-center'><div className='text-black  flex justify-center items-center'>STUDENT LIST</div></Link>
      </div>

      <div>
      <Link to="/editAdmissionList" className='bg-yellow-400 relative h-[300px] w-[300px] flex justify-center'><div className='text-black flex justify-center items-center'>ADMISSION LIST</div></Link>
      </div>

      <div>
      <Link to="/viewPayment" className='bg-pink-400  h-[300px] w-[300px] flex justify-center'><div className='text-black flex justify-center items-center'>PAYMENT LIST</div></Link>
      </div>

      </div>
    </div>
  )
}

export default AdminDashboard
