import React from "react";
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className=" bg-gray-800 shadow-lg ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-gray-300 text-3xl font-bold">CampusGate</a>
            <div className="hidden md:block ml-10">
              <a href="/home" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium">Home</a>
              <a href="/adminDashboard" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium">Dashboard</a>
              <a href="/editInstitute" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium">Institute</a>
            <a href="/editCourse" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium">Course</a>
            <a href="/contact" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium">Contact</a>
            </div>
          </div>
          <div className="flex items-center">
            <Link to="/login"><button className="text-white hidden md:block hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium">Log Out</button></Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
