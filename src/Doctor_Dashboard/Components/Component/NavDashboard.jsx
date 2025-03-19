import React, { useState, useEffect } from 'react';
import '../Component/NavDashboard.css';
import { FaEnvelope, FaBell, FaBars, FaSearch, FaSun, FaMoon } from 'react-icons/fa';

const NavDashboard = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "enabled"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    }
  }, [darkMode]);

  return (
    <div className="dash-navbar">
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="nav-icons">
        <div className="icon-wrapper">
          <FaEnvelope className="icon" />
        </div>
        <div className="icon-wrapper">
          <FaBell className="icon" />
        </div>
        <div className="search-menu">
          <div className="search-box">
            <input type="text" placeholder="Search" />
            <FaSearch className="search-icon" />
          </div>
          <div className="hamburger-menu">
            <FaBars className="icon" />
          </div>
        </div>
        {/* Dark Mode Toggle */}
        <div className="icon-wrapper" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun className="icon" /> : <FaMoon className="icon" />}
        </div>
      </div>
    </div>
  );
};

export default NavDashboard;
