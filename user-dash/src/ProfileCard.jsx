import React from "react";

const ProfileCard = ({ user, onEdit }) => {
  return (
    <div className="profile-card">
      <img src={user.avatar} alt="Profile" className="avatar" />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <p>Email: {user.email}</p>
      <p>Location: {user.location}</p>
      <button onClick={onEdit}>Edit Profile</button>
    </div>
  );
};

export default ProfileCard;
