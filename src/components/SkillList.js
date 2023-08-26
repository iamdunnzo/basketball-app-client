import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSkills, deleteSkill } from '../api/api';

const SkillList = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await getSkills();
        console.log('API response:', response);
        if (!!response) {
          setSkills(response);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching skills:', error);
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteSkill(id);
      setSkills((prevSkills) => prevSkills.filter((skill) => skill._id !== id));
    } catch (error) {
      console.error('Error deleting skill:', error);
    }
  };

  return (
    <div>
      <h2>Skill List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {skills.map((skill) => (
            <li key={skill._id}>
              Name: {skill.name} - Description: {skill.description} - Difficulty: {skill.difficulty}
              <button onClick={() => handleDelete(skill._id)}>Delete</button>
              <Link to={`/skills/${skill._id}/edit`}>Edit</Link>
            </li>
          ))}
        </ul>
      )}
      <Link to="/skills/add">Add Skill</Link>
    </div>
  );
};

export default SkillList;
