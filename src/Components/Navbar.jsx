import React from "react";
import { Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import Image2 from '../assets/Healthcare_picture.png'
import "../style/Navbar.css"; 
import { FaRegCircleUser } from "react-icons/fa6";
function Navbar() {
  return (
    
      <div className="navbar">
        
        <div className="logo">
        <div><img src={Image2} alt='Image2' ></img></div> 
        </div>
        <div class="logo-links">
        <nav className="menu">
          <Link to="/">Home</Link>
          <Link to="/pharmacy">Pharmacy</Link>
          <Link to="/about-us">FAQS</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/contact-us">Contact Us</Link>
        </nav>

        </div>
        
        <div className="icons">
          <div className="icon-btn">
          <IoSearchOutline class="search-icon"/>
          </div>
          <div className="icon-btn">
          <IoSettingsOutline class="settings-icon" />
          </div>
          <div class="icon-btn">
          <FaRegCircleUser  class="user-icon"/>
          </div>
      
        </div>
      </div>

  );
}

export default Navbar;
