import React from 'react';

export default function MyGames() {
  return (
    <div className="p-4 flex flex-col items-center text-center">
      <h1 className="text-3xl font-bold mb-4">My Games</h1>
      <p className="text-lg">This is where we are showing games</p>
      {/* List of saved games will be displayed here */}
    </div>
  );
}