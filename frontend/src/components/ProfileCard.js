import React from "react";

function ProfileCard({ user }) {
  return (
    <div className="profile-card">
      <h4>{user.username}</h4>
      <p>Country: {user.country}</p>
      <p>Games: {user.games}</p>
    </div>
  );
}

export default ProfileCard;
