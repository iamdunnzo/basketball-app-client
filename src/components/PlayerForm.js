import React, { useState } from 'react';
import { createPlayer } from '../api/api';

const PlayerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    team: '',
    jersey: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('adding player');
    try {
      const newlyCreatedPlayer = await createPlayer(formData);
      console.log({ newlyCreatedPlayer });
      if (!!newlyCreatedPlayer._id) {
        // Handle success, e.g., redirect or show a success message.
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <h2>Add Player</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <label>Age:</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} />
        <label>Team:</label>
        <input type="text" name="team" value={formData.team} onChange={handleChange} />
        <label>Jersey:</label>
        <input type="number" name="jersey" value={formData.jersey} onChange={handleChange} />
        <button type="submit">Add Player</button>
      </form>
    </div>
  );
};

export default PlayerForm;
