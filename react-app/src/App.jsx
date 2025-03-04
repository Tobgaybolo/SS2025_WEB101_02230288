

import React from 'react';
import ProfileCard from './ProfileCard';
import './App.css';

function App() {
  // Sample profile data
  const profiles = [
    {
      id: 1,
      name: "Karma Sonam",
      role: "Frontend Developer",
      avatar: "https://via.placeholder.com/100?text=AJ",
      skills: ["React", "JavaScript", "CSS", "HTML"],
      location: "Tsirang, Bhutan"
    },
    {
      id: 2,
      name: "Sonam Dema",
      role: "UX Designer",
      avatar: "https://via.placeholder.com/100?text=ST",
      skills: ["Figma", "Wireframing", "Prototyping"],
      location: "Chhukha, Bhutan"
    }
  ];

  return (
    <div className="App">
      <header>
        <h1>Profile</h1>
      </header>
      <div className="profiles-container">
        {profiles.map(profile => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            role={profile.role}
            avatar={profile.avatar}
            skills={profile.skills}
            location={profile.location}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
