import React from 'react'; 
import { useState } from 'react';

import Auth from '../utils/auth';
import { login } from '../api/authAPI';

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(loginData);
      Auth.login(data.token);
    } catch (err) {
      console.error('Failed to login', err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form className="form login-form" onSubmit={handleSubmit}>
        <h1 className="text-3xl text-center mb-4">Login</h1>
        
        <div className="form-group">
          <label htmlFor="username" className="block text-lg mb-2">Username</label>
          <input
            className="input input-bordered w-full"
            type="text"
            id="username"
            name="username"
            value={loginData.username || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-lg mb-">Password</label>
          <input
            className="input input-bordered w-full"
            type="password"
            id="password"
            name="password"
            value={loginData.password || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <button className="btn btn-primary w-full" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;