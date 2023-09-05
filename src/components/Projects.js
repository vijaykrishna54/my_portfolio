import React, { useState } from 'react';
import './stylesforcomponents/Projects.css'; // Import your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  // Define an array of project objects with image, title, and description
  const projects = [
    {
      title: 'Weather App',
      image: require('./component_images/Weather_app.jpeg'),
      description:
        'Weather apps serve a wide range of purposes, from helping individuals plan their daily activities to providing critical information during severe weather events. They are valuable tools for staying informed and prepared for various weather conditions.',
    },
    {
      title: 'Login Page',
      image: require('./component_images/login_page.jpeg'),
      description: 'Description of Project 2.',
    },
    {
      title: 'Email Notifications',
      image: require('./component_images/email_notifications.jpeg'),
      description: 'Description of Project 3.',
    },
    {
      title: 'Google Oauth',
      image: require('./component_images/google_oauth.jpeg'),
      description: 'Description of Project 4.',
    },
    {
      title: 'Wordpress',
      image: require('./component_images/word_press.jpeg'),
      description: 'Description of Project 5.',
    },
  ];

  const navigateToPreviousProject = () => {
    setCurrentProject((prevProject) =>
      prevProject === 0 ? projects.length - 1 : prevProject - 1
    );
  };

  const navigateToNextProject = () => {
    setCurrentProject((prevProject) =>
      prevProject === projects.length - 1 ? 0 : prevProject + 1
    );
  };

  return (
    <div className="projects-container">
      <h2>PROJECTS</h2>
      <p>Here are some of the projects I've worked on:</p>

      {/* Map over the projects array to display each project */}
      <div className="project">
        {/* Left column with project image */}
        <div className="project-image">
          <img
            src={projects[currentProject].image.default}
            alt={projects[currentProject].title}
          />
        </div>

        {/* Right column with project details */}
        <div className="project-details">
          <h3>{projects[currentProject].title}</h3>
          <p>{projects[currentProject].description}</p>
          {currentProject !== 0 && (
            <div className="arrow-left" onClick={navigateToPreviousProject}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
          )}
          {currentProject !== projects.length - 1 && (
            <div className="arrow-right" onClick={navigateToNextProject}>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          )}
          <button className="view-project-button">View Project</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
