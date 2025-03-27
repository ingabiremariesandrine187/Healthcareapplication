import React from "react";
import '../Component/Profile.css'
// import profileImage from "../assets/admin-profile.jpg"; // Replace with actual image

const Profile = () => {
  return (
    <div className="profile-container">
      <h2 className="profile-title">Admin Profile</h2>

      <div className="profile-card">
        {/* <img src={profileImage} alt="Admin" className="profile-image" /> */}
        <h3>John Doe</h3>
        <p className="role">Administrator</p>
        <p>Email: admin@example.com</p>
        <p>Phone: +123 456 7890</p>
      </div>

      <div className="settings">
        <h3>Account Settings</h3>
        <div class="buttons">
        <button className="edit-profile-btn">Edit Profile</button>
        <button className="change-password-btn">Change Password</button>
        </div>
        
      </div>
    </div>
  );
};

export default Profile;
