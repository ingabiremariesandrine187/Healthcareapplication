import React from "react";
import { Link } from "react-router-dom";
import "../Component/Sidebar.css";
import image2 from '../Component/Asset/doctor3.jpg'
import { FaRegCircleUser } from "react-icons/fa6";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
      <FaRegCircleUser  class="user-iconss"/>
        <h3>Dr. Marttin Deo</h3>
        <p>MBBS, FCPS - MD</p>
      </div>
      <ul className="menu-dashboard">
        <li><Link to="/">🏠 Dashboard</Link></li>
        <li><Link to="/appointments">📅 Appointment</Link></li>
        <li><Link to="#">💳 Payment</Link></li>
        <li><Link to="#">👤 Profile</Link></li>
        <li><Link to="/settings">⚙️ Settings</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
