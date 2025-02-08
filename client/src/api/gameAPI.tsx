// create post request
export const fetchGames = async () => {
    try {
      const response = await fetch('/api/games');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching games:', error);
      return [];  // Return an empty array in case of an error
    }
  };
  