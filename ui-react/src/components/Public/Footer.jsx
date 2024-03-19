// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className=" bottom-0 left-0 w-full bg-gray-800 text-white text-center p-4">
      &copy; {new Date().getFullYear()} CampusGate
    </footer>
  );
}

export default Footer;
