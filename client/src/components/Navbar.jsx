import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage user login state
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true); // Simulate login
    navigate('/my-games'); // Redirect to My Games after login
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Simulate logout
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-4xl text-center">
          GAMERZ
        </Link>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="text"
          placeholder="Search"
          className="input input-secondary w-full md:w-auto"
        />

        {isLoggedIn ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu text-4xl menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li><Link to="/my-games">My Games</Link></li>
              <li><Link to="/wishlist">Wishlist</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><a onClick={handleLogout}>Logout</a></li>
            </ul>
          </div>
        ) : (
          <button onClick={handleLogin} className="btn btn-primary">
            Login
          </button>
        )}
      </div>
    </div>
  );
}