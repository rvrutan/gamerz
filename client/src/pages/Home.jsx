import React, { useEffect, useState } from 'react';
import { fetchGames } from '../api/gameAPI';
import GameCard from '../components/GameCard';

export default function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGameList = async () => {
      const fetchedGames = await fetchGames();
      // Optionally, limit the number of games to display on the homepage
      setGames(fetchedGames.slice(0, 4)); // Display only the first 4 games
    };
    fetchGameList();
  }, []);

  return (
    <div className="p-4 flex flex-col items-center text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to GAMERZ</h1>
      <p className="text-lg mb-4">Discover some of the best games below:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}