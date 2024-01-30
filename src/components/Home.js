// Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const fetchData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const Home = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    const userData = await fetchData(username);
    // Store user data in Redux (if using)
    navigate('/user-details');
  };

  return (
    <div>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Home;
