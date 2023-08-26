import React from 'react';

const Home = ({ user }) => {
  const containerStyle = {
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  };

  const headerStyle = {
    color: '#333',
    fontSize: '24px',
    marginBottom: '20px', // Add margin to push other content down
  };

  const paragraphStyle = {
    color: '#555',
    fontSize: '18px',
  };

  const userStyle = {
    color: 'blue',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Welcome to the Player Development App!</h2>
      {user ? (
        <p style={paragraphStyle}>
          This is the home page of the app. You are signed in as <span style={userStyle}>{user.email}</span>.
        </p>
      ) : (
        <p style={paragraphStyle}>This is the home page of the app.</p>
      )}
    </div>
  );
};

export default Home;
