// RepositoryDetails.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RepositoryDetails = () => {
  const location = useLocation();
  const repositoryName = location.state.repositoryName;

  // Fetch repository details using repositoryName

  useEffect(() => {
    // Fetch repository details
  }, [repositoryName]);

  return (
    <div>
      {/* Display repository details */}
    </div>
  );
};

export default RepositoryDetails;
