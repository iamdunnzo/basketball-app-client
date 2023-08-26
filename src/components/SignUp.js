import React, { useState } from 'react';
import { signUp } from '../api/api';
import { useNavigate } from 'react-router-dom';
import { saveTokenToLocal } from '../utils/localStorageUtils';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('signing up', formData);
    try {
      const response = await signUp(formData);

      // Save the token to local storage
      if (response.token) {
        saveTokenToLocal(response.token);
      }

      console.log("You Signed Up!!!!!!!!");
      navigate('/');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
