import React, { useState, useEffect } from 'react';
import './stylesforcomponents/Navbar.css';
import profilePicture from './component_images/Vijay_profile_picture.jpeg'; 

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Detect screen width to determine when to show/hide the mobile menu
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial screen width
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav id="navbar">
      <div className="left-content">
        <div className="profile-picture-container">
          <img src={profilePicture} alt="Profile" className="profile-picture" />
        </div>
        <span className="name" onClick={() => scrollToSection('home')}>
          VIJAY KRISHNA
        </span>
      </div>
      {window.innerWidth <= 768 ? (
       
        <button className="hamburger-button" onClick={toggleMobileMenu}>
          ☰
        </button>
      ) : (
        // laptop menu
        <ul className='laptop-nav-links'>
          <li>
            <button className='Nav-item' onClick={() => scrollToSection('home')}>HOME</button>
          </li>
          <li>
            <button className='Nav-item' onClick={() => scrollToSection('about')}>ABOUT</button>
          </li>
          <li>
            <button className='Nav-item' onClick={() => scrollToSection('projects')}>PROJECTS</button>
          </li>
          <li>
            <button className='Nav-item' onClick={() => scrollToSection('contact')}>CONTACT</button>
          </li>
        </ul>
        
      )}

      {/* Mobile menu */}
      {isMobileMenuOpen && (



          <ul className="mobile-menu">
            <li>
              <button onClick={() => scrollToSection('home') && toggleMobileMenu()}>HOME</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('about') && toggleMobileMenu()}>ABOUT</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('projects') && toggleMobileMenu()}>PROJECTS</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact') && toggleMobileMenu()}>CONTACT</button>
            </li>
          </ul>

          
     
      )}
    </nav>
  );
};

export default Navbar;
