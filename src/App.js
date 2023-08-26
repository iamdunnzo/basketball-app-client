import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CoachList from './components/CoachList';
import PlayerList from './components/PlayerList';
import SkillList from './components/SkillList';
import CoachForm from './components/CoachForm';
import PlayerForm from './components/PlayerForm';
import SkillForm from './components/SkillForm';
import EditCoachForm from './components/EditCoachForm';
import EditPlayerForm from './components/EditPlayerForm';
import EditSkillForm from './components/EditSkillForm';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';  

const NotFound = () => {
  return <h2>404 Not Found</h2>;
};

const App = () => {
  const navBarStyle = {
    backgroundColor: 'blue', // Set the background color to blue
    color: 'white', // Set the text color to white
    padding: '10px', // Add padding for better visual appeal
  };

  return (
    <div>
      <nav style={navBarStyle}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/coaches">Coaches</Link>
          </li>
          <li>
            <Link to="/players">Players</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Coach Routes */}
        <Route path="/coaches" element={<CoachList />} />
        <Route path="/coaches/add" element={<CoachForm />} />
        <Route path="/coaches/:id/edit" element={<EditCoachForm />} />

        {/* Player Routes */}
        <Route path="/players" element={<PlayerList />} />
        <Route path="/players/add" element={<PlayerForm />} />
        <Route path="/players/:id/edit" element={<EditPlayerForm />} />

        {/* Skill Routes */}
        <Route path="/skills" element={<SkillList />} />
        <Route path="/skills/add" element={<SkillForm />} />
        <Route path="/skills/:id/edit" element={<EditSkillForm />} />

        {/* Auth Routes */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
