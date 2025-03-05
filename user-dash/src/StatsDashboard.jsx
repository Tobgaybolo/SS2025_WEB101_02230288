import React from "react";

const StatsDashboard = ({ stats }) => {
  return (
    <div className="stats-dashboard">
      <h2>User Stats</h2>
      <div className="stat">Followers: <span>{stats.followers}</span></div>
      <div className="stat">Posts: <span>{stats.posts}</span></div>
      <div className="stat">Likes: <span>{stats.likes}</span></div>
    </div>
  );
};

export default StatsDashboard;
