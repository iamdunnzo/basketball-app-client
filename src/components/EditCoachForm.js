import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCoachById, updateCoach } from '../api/api';

const EditCoachForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    coachType: '', // Add a default value or initialize as an empty string
    speciality: '', // Add a default value or initialize as an empty string
  });

  useEffect(() => {
    const fetchCoach = async () => {
      try {
        const response = await getCoachById(id);
        // Check if 'response.data' exists and has the expected properties
        if (response.data) {
          const { name, coachType, speciality } = response.data;
          setFormData({
            name: name || '', // Check if 'name' exists, otherwise use an empty string
            coachType: coachType || '', // Check if 'coachType' exists, otherwise use an empty string
            speciality: speciality || '', // Check if 'speciality' exists, otherwise use an empty string
          });
        }
      } catch (error) {
        console.error('Error fetching coach:', error);
      }
    };

    fetchCoach();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateCoach(id, formData);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <h2>Edit Coach</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <label>Coach Type:</label>
        <input type="text" name="coachType" value={formData.coachType} onChange={handleChange} />
        <label>Best Used For:</label>
        <input type="text" name="speciality" value={formData.speciality} onChange={handleChange} />
        <button type="submit">Update Coach</button>
      </form>
    </div>
  );
};

export default EditCoachForm;
