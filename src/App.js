// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import UserDetails from './components/UserDetails';
import RepositoryDetails from './components/RepositoryDetails';
import FollowersList from './components/FollowersList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-details" element={<UserDetails />}>
          <Route path="/:followerUsername" element={<UserDetails />} />
        </Route>
        <Route path="/repository-details" element={<RepositoryDetails />} />
        <Route path="/followers-list" element={<FollowersList />} />
      </Routes>
    </Router>
  );
}

export default App;
