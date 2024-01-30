// UserDetails.js
import React from 'react';
import { Link } from 'react-router-dom';

const UserDetails = () => {
  // Retrieve user data from Redux (if using)

  return (
    <div>
      <h2>User Details</h2>
      <Link to="/followers-list">View Followers</Link>
    </div>
  );
};

export default UserDetails;
