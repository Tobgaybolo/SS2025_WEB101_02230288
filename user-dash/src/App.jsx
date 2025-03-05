import React, { useState } from "react";
import Header from "./Header";
import ProfileCard from "./ProfileCard";
import EditForm from "./EditForm";
import StatsDashboard from "./StatsDashboard";

const App = () => {
  const [user, setUser] = useState({
    name: "Kinley Tobgay",
    bio: "Web Developer",
    email: "02230288.cst@rub.edu.bt",
    location: "Chhukha, Bhutan",
    avatar: "user-dash/src/assets/bolo.JPG",
  });

  const [stats, setStats] = useState({
    followers: 120,
    posts: 45,
    likes: 300,
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedUser) => {
    setUser(updatedUser);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="app">
      <Header />
      {isEditing ? (
        <EditForm user={user} onSave={handleSave} onCancel={handleCancel} />
      ) : (
        <ProfileCard user={user} onEdit={handleEditClick} />
      )}
      <StatsDashboard stats={stats} />
    </div>
  );
};

export default App;
