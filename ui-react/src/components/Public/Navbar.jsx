import React from "react";
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-white text-2xl font-bold">Logo</a>
            <div className="hidden md:block ml-10">
              <a href="/home" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="/UserDashboard" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
              <a href="/Institute" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Institute</a>
              <a href="Course" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Course</a>
            </div>
          </div>
          <div className="flex items-center">
            <button className="text-white hidden md:block hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Log Out</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;