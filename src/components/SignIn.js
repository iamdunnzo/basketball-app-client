import React, { useState } from 'react';
import { signIn, verifyToken } from '../api/api';
import { saveTokenToLocal } from '../utils/localStorageUtils';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [user, setUser] = useState(null);
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn(formData);
      if (res.token) {
        saveTokenToLocal(res.token);

        const userData = await verifyToken();
        console.log({ userData });
        setUser(userData);
      }
      console.log("You Signed In!!!!!!!!");
      navigate('/'); 
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        <button type="submit">Sign In</button>
      </form>

      {user && (
        <div>
          <h3>Welcome, {user.email}!</h3>
        </div>
      )}
    </div>
  );
};

export default SignIn;
