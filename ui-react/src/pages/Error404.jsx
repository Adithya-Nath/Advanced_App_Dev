import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600">Oops! Page not found.</p>
      <p className="text-lg text-gray-600 mt-2">The page you are looking for might have been removed or its name changed.</p>
    </div>
  );
};

export default NotFound;
