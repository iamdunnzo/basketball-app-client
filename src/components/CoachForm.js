import React, { useState } from 'react';
import { createCoach } from '../api/api';

const CoachForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    experience: '',
    team: '',
    coachtype: '', // Updated field name to match the schema
    speciality: '',
  });

  const coachTypes = ['Beginner', 'Intermediate', 'Advanced'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCoach(formData);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <h2>Add Coach</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <label>Experience:</label>
        <input type="number" name="experience" value={formData.experience} onChange={handleChange} />
        <label>Team:</label>
        <input type="text" name="team" value={formData.team} onChange={handleChange} />
        <label>Coach Type:</label>
        <select
          name="coachtype" // Updated field name to match the schema
          id="coaches"
          value={formData.coachtype} // Updated field name to match the schema
          onChange={(e) => handleChange(e)}
        >
          {coachTypes.map((coach, i) => (
            <option key={i} value={coach}>
              {coach}
            </option>
          ))}
        </select>
        <label>Speciality:</label>
        <input type="text" name="speciality" value={formData.speciality} onChange={handleChange} />
        <button type="submit">Add Coach</button>
      </form>
    </div>
  );
};

export default CoachForm;
