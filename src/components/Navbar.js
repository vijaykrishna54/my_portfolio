import React from 'react';
import './stylesforcomponents/Navbar.css';
import profilePicture from './component_images/Vijay_profile_picture.jpeg'; // Import your profile picture

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          <button onClick={() => scrollToSection('home')}>HOME</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('about')}>ABOUT</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('projects')}>PROJECTS</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('contact')}>CONTACT</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
