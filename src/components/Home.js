import React from 'react';

const Home = ({ user }) => {
  return (
    <div>
      <h2>Welcome to the Player Developement App!</h2>
      {user ? (
        <p>This is the home page of the app. You are signed in as {user.email}.</p>
      ) : (
        <p>This is the home page of the app.</p>
      )}
    </div>
  );
};

export default Home;
