import React from 'react';
import Navbar from '../../components/Public/Navbar';
import UserNavbar from '../../components/Public/UserNavbar';
import { Link } from 'react-router-dom';
import universityBuildingImage from '../../assets/images/institute.jpeg';
import mortarboardImage from '../../assets/images/course.jpeg';
import audienceImage from '../../assets/images/students.jpeg';
import billImage from '../../assets/images/payment.jpeg';
import paperImage from '../../assets/images/paper.jpg';
import Footer from '../../components/Public/Footer';

const UserDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <UserNavbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-8 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DashboardItem image={universityBuildingImage} link="/viewInstitute" text="VIEW INSTITUTE" />
          <DashboardItem image={mortarboardImage} link="/viewCourses" text="VIEW COURSE" />
          <DashboardItem image={audienceImage} link="/userProfile" text="STUDENT PROFILE" />
          <DashboardItem image={paperImage} link="/viewAdmissionStatus" text="ADMISSION STATUS" />
          <DashboardItem image={billImage} link="/payment" text="PAYMENT " />
          <DashboardItem image={billImage} link="/paymenthISTORY" text="PAYMENT HISTORY" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

const DashboardItem = ({ image, link, text }) => {
  return (
    <Link to={link} className="relative bg-transparent h-48 md:h-64 flex flex-col justify-between items-center p-4">
      <div className="absolute inset-0 bg-white opacity-50 rounded-lg"></div>
      <img src={image} alt={text} className="w-auto h-auto max-w-full max-h-full object-cover z-10" />
      <div className="text-black-800 text-center z-20 font-medium" >{text}</div>
    </Link>
  );
}

export default UserDashboard;
