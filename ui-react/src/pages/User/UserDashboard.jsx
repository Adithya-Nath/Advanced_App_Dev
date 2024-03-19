import React from 'react';
import { Link } from 'react-router-dom';
import UserNavbar from '../../components/Public/UserNavbar';
import Footer from '../../components/Public/Footer';

const UserDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <UserNavbar />
      <div className="flex flex-wrap justify-center items-center mt-10">

        <div className="flex flex-wrap justify-center items-center gap-7 mt-10 w-full max-w-6xl mx-auto mb-5">
          <DashboardItem link="/viewInstitute" color="bg-blue-400" text="VIEW INSTITUTE" />
          <DashboardItem link="/viewCourses" color="bg-green-400" text="VIEW COURSE" />
          <DashboardItem link="/userProfile" color="bg-red-400" text="ADD STUDENT PROFILE" />
          <DashboardItem link="/viewAdmissionStatus" color="bg-yellow-400" text="CHECK ADMISSION STATUS" />
          <DashboardItem link="/payment" color="bg-pink-400" text="MAKE PAYMENT" />
          <DashboardItem link="/paymentHistory" color="bg-violet-400" text="PAYMENT HISTORY" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

const DashboardItem = ({ link, color, text }) => {
  return (
    <div className={`relative ${color} h-48 w-48 md:h-64 md:w-64 flex justify-center items-center`}>
      <Link to={link} className="text-black flex justify-center items-center w-full h-full">
        <div className="text-center">{text}</div>
      </Link>
    </div>
  );
}

export default UserDashboard;
