import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCoaches, deleteCoach } from '../api/api';

const CoachList = () => {
    const [coaches, setCoaches] = useState([]);
    
    const fetchCoaches = async () => {
      try {
        const response = await getCoaches();
        console.log({response, coaches})
        setCoaches(response);

        console.log({coachesAfterSet: coaches})
      } catch (error) {
        console.error('Error fetching coaches:', error);
      }
    };

    useEffect(() => {
      fetchCoaches();
    }, []);
  
    const handleDelete = async (id) => {
      try {
        await deleteCoach(id);
        setCoaches(coaches.filter((coach) => coach._id !== id));
      } catch (error) {
        console.error('Error deleting coach:', error);
      }
    };
  
    return (
      <div>
        <h2>Coach List</h2>
        <ul>
          {coaches.map((coach) => (
            <li key={coach._id}>
              {coach.name} - {coach.coachType} - {coach.speciality}
              <button onClick={() => handleDelete(coach._id)}>Delete</button>
              <Link to={`/coaches/${coach._id}/edit`}>Edit</Link>
            </li>
          ))}
        </ul>
        <Link to="/coaches/add">Add Coach</Link>
      </div>
    );
  };
  
  export default CoachList;