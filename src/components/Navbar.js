import React from 'react';
import { Link } from 'react-router-dom';
import './stylesforcomponents/Navbar.css';
import profilePicture from './component_images/Vijay_profile_picture.jpeg'; // Import your profile picture

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-content">
        <div className="profile-picture-container">
          <img src={profilePicture} alt="Profile" className="profile-picture" />
        </div>
        <span className="name">VIJAY KRISHNA</span>
      </div>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/projects">PROJECTS</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
