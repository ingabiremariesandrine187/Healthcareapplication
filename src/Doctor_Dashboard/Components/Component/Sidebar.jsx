import React from "react";
import { Link } from "react-router-dom";
import "../Component/Sidebar.css";
import image2 from '../Component/Asset/doctor3.jpg'


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
      <img src={image2} alt='Image2' class="dashboard-profile"></img>
        <h3>Dr. Marttin Deo</h3>
        <p>MBBS, FCPS - MD</p>
      </div>
      <ul className="menu-dashboard">
        <li><Link to="/">🏠 Dashboard</Link></li>
        <li><Link to="/appointments">📅 Appointment</Link></li>
        <li><Link to="/payment">💳 Payment</Link></li>
        <li><Link to="/profile">👤 Profile</Link></li>
        <li><Link to="/settings">⚙️ Settings</Link></li>
        <li><Link to="/logout">🚪 Logout</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
