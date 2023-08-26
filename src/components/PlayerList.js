import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPlayers, deletePlayer } from '../api/api';

const PlayerList = () => {
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await getPlayers();
        console.log('API response:', response);
        if (!!response)
        setPlayers(response);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching players:', error);
        setIsLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deletePlayer(id);
      setPlayers(players.filter((player) => player._id !== id));
    } catch (error) {
      console.error('Error deleting player:', error);
    }
  };

  return (
    <div>
      <h2>Player List</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {players && players.length > 0 ? (
            <ul>
              {players.map((player) => (
                <li key={player._id}>
                  {player.name} - {player.tencelStr} - {player.gauge} - {player.knotType}
                  <button onClick={() => handleDelete(player._id)}>Delete</button>
                  <Link to={`/players/${player._id}/edit`}>Edit</Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No players available.</p>
          )}
          <Link to="/players/add">Add Player</Link>
        </>
      )}
    </div>
  );
};

export default PlayerList;