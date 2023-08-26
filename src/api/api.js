import axios from 'axios';
import { getLocalStorageToken } from '../utils/localStorageUtils';

const api = axios.create({
  baseURL: 'http://localhost:4200',
  headers: {
    withCredentials: true,
    Authorization: `Bearer ${getLocalStorageToken()}`
  }
});

// Coach API

export const createCoach = async (coachData) => {
  try {
    console.log({coachData})
    const response = await api.post('/coaches', coachData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCoaches = async () => {
  try {
    const response = await api.get('/coaches');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCoachById = async (id) => {
  try {
    const response = await api.get(`/coaches/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCoach = async (id) => {
  try {
    await api.delete(`/coaches/${id}`);
  } catch (error) {
    throw error;
  }
};

export const updateCoach = async (id, coachData) => {
  try {
    const response = await api.put(`/coaches/${id}`, coachData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Player API Calls

export const createPlayer = async (playerData) => {
  try {
    const response = await api.post('/players', playerData);
    console.log({createPlayer: response})
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPlayers = async () => {
  try {
    const response = await api.get('/players');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPlayerById = async (id) => {
  try {
    const response = await api.get(`/players/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePlayer = async (id) => {
  try {
    await api.delete(`/players/${id}`);
  } catch (error) {
    throw error;
  }
};

export const updatePlayer = async (id, playerData) => {
  try {
    const response = await api.put(`/players/${id}`, playerData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Skill API Calls

export const createSkill = async (skillData) => {
  try {
    const response = await api.post('/skills', {
      name: skillData.name,
      description: skillData.description,
      difficulty: skillData.difficulty,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateSkill = async (id, skillData) => {
  try {
    const response = await api.put(`/skills/${id}`, {
      name: skillData.name,
      description: skillData.description,
      difficulty: skillData.difficulty,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Import axios and other necessary dependencies

export const getSkillById = async (id) => {
  try {
    // Use axios or your preferred HTTP client to make a GET request to fetch a skill by ID
    const response = await api.get(`/skills/${id}`);
    return response.data; // Return the fetched skill data
  } catch (error) {
    throw error; // Handle errors as needed
  }
};

export const getSkills = async () => {
  try {
    // Use axios or your preferred HTTP client to make a GET request to fetch all skills
    const response = await api.get('/skills');
    return response.data; // Return the array of skills
  } catch (error) {
    throw error; // Handle errors as needed
  }
};

export const deleteSkill = async (id) => {
  try {
    // Use axios or your preferred HTTP client to make a DELETE request to delete a skill by ID
    await api.delete(`/skills/${id}`);
    // No need to return data for a delete operation
  } catch (error) {
    throw error; // Handle errors as needed
  }
};



// User API Calls

export const signUp = async (userData) => {
  console.log({creatingUser: userData})
  try {
    const response = await api.post('auth/signup', userData);
    return response.data;
  } catch (error) {
    console.log({error});
    throw error;
  }
};

export const signIn = async (userData) => {
  console.log({signinUser: userData})
  try {
    const response = await api.post('auth/signin', userData);
    console.log({userSignInRes: response});
    return response.data;
  } catch (error) {
    console.log({errorFromApiCall: error, api})
    throw error;
  }
};


export const verifyToken = async () => {
  try {
    const response = await api.get('/auth/verify');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;
                 