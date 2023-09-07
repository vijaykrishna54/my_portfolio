import React from 'react';
import './stylesforcomponents/About.css';

const About = () => {
  // Function to scroll to a specific section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="about-container">
      <h2 className="about-heading">ABOUT ME</h2>
      <div className="small-intro">
        <p>
          I am a MERN stack web developer with a passion for creating web applications that deliver a great user experience.
        </p>
      </div>
      <div className="content-container">
        <div className="details">
        <h3>Get to Know Me!</h3>
<p>
  I have a solid foundation in web development technologies, including JavaScript, Node.js, React, MongoDB, HTML5, and CSS. In my previous role at TCS, a well-respected IT services company, I successfully completed various projects that covered the entire software development process, from initial planning to final deployment.
</p>
<p>
  I recently completed a post-degree diploma in web and mobile application design and development at Langara College. This educational experience allowed me to enhance my skills and stay up-to-date with the latest industry trends and technologies in web development.
</p>
<p>
  I am actively seeking opportunities to join a dynamic and forward-thinking team. My goal is to contribute to the success of web and mobile applications by delivering solutions that not only meet but exceed client expectations.
</p>
<p>
Please don't hesitate to connect with me on {' '}
  <a
    href="https://www.linkedin.com/in/vijay-krishna-yarabarla"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn 
  </a>
  .
</p>
          <button className="contact-link-button" onClick={() => scrollToSection('contact')}>
            Contact
          </button>
        </div>
        <div className="side-content">
          <div className="skills">
            <h3>My Skills</h3>
            <div className="skill-buttons">
              <button className="skill-button">HTML 5</button>
              <button className="skill-button">CSS 3</button>
              <button className="skill-button">JavaScript</button>
              <button className="skill-button">React</button>
              <button className="skill-button">React Native</button>
              <button className="skill-button">Express</button>
              <button className="skill-button">Node</button>
              <button className="skill-button">MongoDB</button>
              <button className="skill-button">SQL basics</button>
              <button className="skill-button">GraphQL</button>
            </div>
          </div>
          <div className="tools">
            <h3>Tools</h3>
            <div className="tool-buttons">
              <button className="tool-button">Git</button>
              <button className="tool-button">GitHub</button>
              <button className="tool-button">Jira</button>
              <button className="tool-button">Trello</button>
              <button className="tool-button">Wordpress</button>
              <button className="tool-button">Postman</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
