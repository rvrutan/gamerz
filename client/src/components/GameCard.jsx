import React from 'react';

const GameCard = ({ game }) => {
  return (
    <div key={game.id} className="max-w-xs rounded-lg overflow-hidden shadow-lg">
      <img
        src={game.background_image}
        alt={game.name}
        className="w-full h-56 bg-cover bg-center"
      />
      <div className="p-4 bg-white">
        <h2 className="text-xl font-bold mb-2">{game.name}</h2>
        <p className="text-gray-700 mb-2">{game.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-yellow-500">Rating: {game.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default GameCard;