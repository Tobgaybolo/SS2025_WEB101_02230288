import React, { useState } from "react";

const EditForm = ({ user, onSave, onCancel }) => {
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="edit-form">
      <h2>Edit Profile</h2>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input type="text" name="bio" value={formData.bio} onChange={handleChange} placeholder="Bio" />
      <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" />
      <button onClick={() => onSave(formData)}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditForm;
