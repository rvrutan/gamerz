import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Wishlist({ isLoggedIn }) {
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate('/login');
    return null;
  }

  return (
    <div className="p-4 flex flex-col items-center text-center">
      <h1 className="text-3xl font-bold mb-4">Wishlist</h1>
      <p>This is where we are showing wishlist</p>
    </div>
  );
}