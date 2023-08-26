import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPlayerById, updatePlayer } from '../api/api';

const EditPlayerForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    age: 0, // Assuming age is a number
    team: '',
    jersey: 0, // Assuming jersey is a number
  });

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await getPlayerById(id);
        setFormData({
          name: response.data?.name || '', // Optional chaining for safety
          age: response.data?.age || 0, // Optional chaining for safety
          team: response.data?.team || '',
          jersey: response.data?.jersey || 0, // Optional chaining for safety
        });
      } catch (error) {
        console.error('Error fetching player:', error);
      }
    };

    fetchPlayer();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePlayer(id, formData);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <h2>Edit Player</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <label>Age:</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} />
        <label>Team:</label>
        <input type="text" name="team" value={formData.team} onChange={handleChange} />
        <label>Jersey:</label>
        <input type="number" name="jersey" value={formData.jersey} onChange={handleChange} />
        <button type="submit">Update Player</button>
      </form>
    </div>
  );
};

export default EditPlayerForm;
