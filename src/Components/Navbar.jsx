import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import Image2 from '../assets/Healthcare_picture.png';
import "../style/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <div><img src={Image2} alt='Healthcare Logo'></img></div> 
      </div>
      <div className="logo-links">
        {/* Menu Icon for small screens */}
        <div className="menu-icon" onClick={toggleMenu}>
          <span className="menu-toggle">☰</span> {/* You can use a hamburger icon here */}
        </div>

        {/* Navigation Links */}
        <nav className={`menu ${menuOpen ? 'open' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/pharmacy">Pharmacy</Link>
          <Link to="/faqs">FAQS</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/about-us">About us</Link>
          <Link to="/login">admin</Link>
        </nav>
      </div>
      
      {/* Icons Section */}
      <div className="icons">
        <div className="icon-btn">
          <IoSearchOutline className="search-home" />
        </div>
        <div className="icon-btn">
          <IoSettingsOutline className="settings-icon" />
        </div>
        <div className="icon-btn">
          <FaRegCircleUser className="user-icon" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
