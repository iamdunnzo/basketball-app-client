import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSkillById, updateSkill } from '../api/api';

const EditSkillForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    difficulty: 'Beginner',
  });
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchSkill = async () => {
      try {
        const response = await getSkillById(id);
        setFormData({
          name: response.name || '', // Updated to handle undefined values
          description: response.description || '', // Updated to handle undefined values
          difficulty: response.difficulty || 'Beginner',
        });
        setLoading(false); // Update loading state
      } catch (error) {
        console.error('Error fetching skill:', error);
        setLoading(false); // Update loading state in case of an error
      }
    };

    fetchSkill();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateSkill(id, formData);
      // Handle success, redirect, etc.
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error, show error message, etc.
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Edit Skill</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <label>Difficulty:</label>
        <select
          name="difficulty"
          value={formData.difficulty}
          onChange={(e) => handleChange(e)}
        >
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
        <button type="submit">Update Skill</button>
      </form>
    </div>
  );
};

export default EditSkillForm;
