import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function About({ isLoggedIn }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

  return (
    <div className="p-4 flex flex-col items-center text-center">
      <h1 className="text-3xl font-bold mb-4">About</h1>
      <p>This is a game library application where you can save games and create a wishlist of games you want to play.</p>
    </div>
  );
})}