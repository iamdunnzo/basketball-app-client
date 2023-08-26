import React, { useState } from 'react';
import { createSkill } from '../api/api';

const SkillForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    difficulty: 'Beginner', // Set the default value to 'Beginner'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log('Form Data:', formData);

    e.preventDefault();
    console.log('adding skill');
    try {
      const newlyCreatedSkill = await createSkill(formData);
      console.log({ newlyCreatedSkill });

      if (!!newlyCreatedSkill._id) {
        // Handle success
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error
    }
  };

  return (
    <div>
      <h2>Add Skill</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <label>Description:</label>
        <input type="text" name="description" value={formData.description} onChange={handleChange} />
        <label>Difficulty:</label>
        <select name="difficulty" value={formData.difficulty} onChange={handleChange}>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
        <button type="submit">Add Skill</button>
      </form>
    </div>
  );
};

export default SkillForm;
