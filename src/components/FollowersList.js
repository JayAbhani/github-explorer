// FollowersList.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FollowersList = () => {
  const navigate = useNavigate();

  const handleFollowerClick = (followerUsername) => {
    // Navigate to UserDetails with the selected follower's username
    navigate(`/user-details/${followerUsername}`);
  };

  return (
    <div>
      <h2>Followers List</h2>
      {/* Display list of followers */}
      <ul>
        <li>
          <Link to="/user-details">Follower 1</Link>
        </li>
        <li>
          <Link to="/user-details">Follower 2</Link>
        </li>
        {/* ... */}
      </ul>
      <Link to="/user-details">Back to User Details</Link>
    </div>
  );
};

export default FollowersList;
