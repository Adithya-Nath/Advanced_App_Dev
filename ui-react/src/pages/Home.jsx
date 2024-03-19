import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Public/Navbar';
import Footer from '../components/Public/Footer';
import image from '../assets/images/celeb.jpg';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-4xl font-bold text-white mb-8">WELCOME TO ONLINE COLLEGE ADMISSION PORTAL</h1>
          <p className="text-lg text-white mb-8">SIMPLIFY YOUR ADMISSION PROCESS WITH CAMPUS GATE</p>
          <div className="flex flex-col items-center space-y-4">
           <Link to={"/aboutUs"}><button className="bg-white text-blue-500 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-lg font-semibold shadow-md">
              Learn More
            </button>
            </Link>
            <Link to="/userDashboard">
              <button className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
