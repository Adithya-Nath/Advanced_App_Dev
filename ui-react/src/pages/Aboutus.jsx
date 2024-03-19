// AboutUsPage.js

import React from 'react';
import Navbar from '../components/Public/Navbar';
import UserNavbar from '../components/Public/UserNavbar';
import Footer from '../components/Public/Footer';

const AboutUsPage = () => {
  return (
    <div>
        <Navbar/>
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-lg text-gray-600">
          Welcome to our online college admission portal! We strive to simplify the college admission process by providing a user-friendly platform for students, parents, and educational institutions.
        </p>
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-700">
            Our mission is to empower students to pursue their educational goals by offering a seamless and transparent admission process.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p className="text-gray-700">
            We envision a future where every student has access to quality education and can achieve their full potential, regardless of their background or circumstances.
          </p>
        </div>
        <div className="mt-10 mb-[105px]">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-700">
            Have questions or feedback? Feel free to reach out to us at <a href="mailto:info@collegeadmissionsportal.com" className="text-blue-500">info@collegeadmissionsportal.com</a>.
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default AboutUsPage;
