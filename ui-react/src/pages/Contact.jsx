import React from 'react';
import Navbar from '../components/Public/Navbar';
import Footer from '../components/Public/Footer';

const ContactUs = () => {
  return (
    <div>
      <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-800 font-semibold mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="border rounded px-4 py-2 w-full focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-800 font-semibold mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="border rounded px-4 py-2 w-full focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-800 font-semibold mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="border rounded px-4 py-2 w-full focus:outline-none resize-none"
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ContactUs;
