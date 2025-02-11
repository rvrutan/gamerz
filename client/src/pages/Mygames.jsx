import React, { useEffect, useState } from 'react';
import { useHref } from 'react-router';
// @ts-ignore
import witcher3Img from "../../public/witcher3.jpg";
import cyberpunkImg from "../../public/cyberpunk.jpeg";
import rdr2Img from "../../public/rdr2.jpeg"

export default function MyGames() {
    // State to store the games
    const [games, setGames] = useState([
      {
        id: 0,
        name: '',
        background_image: '',
        rating: 0,
        description: ''
      }
    ]);
    // Fetch games when the component mounts (simulate fetching from a database or API)
    useEffect(() => {
      const fetchGames = async () => {
        // Mock fetch (replace with API call when available)
        const fetchedGames = [
          {
            id: 1,
            name: 'The Witcher 3: Wild Hunt',
            background_image: witcher3Img,
            rating: 4.9,
            description: 'An epic RPG adventure full of rich storytelling and exploration.'
          },
          {
            id: 2,
            name: 'Red Dead Redemption 2',
            background_image: rdr2Img,
            rating: 4.8,
            description: 'A massive open-world game set in the late 1800s with incredible detail.'
          },
          {
            id: 3,
            name: 'Cyberpunk 2077',
            background_image: cyberpunkImg,
            rating: 4.2,
            description: 'A futuristic RPG with a focus on cybernetic enhancements and freedom of choice.'
          },
          // Add more games here as needed
        ];
  
        setGames(fetchedGames);  // Set games from fetched data
      };
      fetchGames();
    }, []);
  
    return (
      <div className="p-4 flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold mb-4">My Games</h1>
        <p className="text-lg mb-4">Here are some of the games I love playing:</p>
        {/* Grid to display the games */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {games.map((game) => (
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
                        ))}
                      </div>
                    </div>
                  );
              }