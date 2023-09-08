import React from 'react';
import './stylesforcomponents/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <div className="footer-heading">Vijay Krishna Yarabarla</div>
        <p>Crafting Seamless Digital Experiences with MERN Magic</p>
      </div>

      <div className="footer-center">
        <div className="footer-heading">Connect with Me</div>
        <div className="social-icons">
          <a href="https://github.com/vijaykrishna54" className="icon-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/vijay-krishna-yarabarla" className="icon-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>


      <div className="footer-right">
        <div className="footer-heading">CEO & Founder for VaxiCare</div>
        
      </div>
    </div>
  );
};

export default Footer;
