import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic
    if (!formData.username.trim() || !formData.password.trim()) {
      alert('Please fill in all fields');
      return;
    }
    // Additional validation can be added here
    console.log('Form data:', formData);
    // Reset form fields
    setFormData({ username: '', password: '' });
  };

  return (
    <div className='flex items-center justify-center h-screen bg-white'>
      <div className='bg-gray-200 p-8 rounded-lg shadow-md'>
        <h1 className='text-3xl font-bold mb-4 text-center text-orange-400'>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-5'>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder='Username'
              className='input'
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder='Password'
              className='input'
              required
            />
            <button className='bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600' type="submit">Login</button>
            <div className='text-sm text-orange-400 text-center'>
              <p>
                Don't have an account? <Link to="/register" className='underline text-purple-600'>Register here</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
