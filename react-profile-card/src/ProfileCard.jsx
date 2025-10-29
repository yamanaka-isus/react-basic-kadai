import React from 'react';

const ProfileCard = ({ profile }) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '12px'
      }}
    >
      <h2>{profile.name}</h2>
      <p>{profile.age}歳</p>
      <p>{profile.bio}</p>
    </div>
  );
};

export default ProfileCard;