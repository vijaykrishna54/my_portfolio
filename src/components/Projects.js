import React, { useState } from 'react';
import './stylesforcomponents/Projects.css'; 
import WeatherAppImage from './component_images/Weather_app.jpeg';
import LoginPageImage from './component_images/login_page.jpeg';
import EmailNotificationsImage from './component_images/email_notifications.jpeg';
import GoogleOAuthImage from './component_images/google_oauth.jpeg';
import WordPressImage from './component_images/word_press.jpeg';

const projectsData = [
  {
    title: 'Weather App',
    image: WeatherAppImage,
    description:
      'Weather apps serve a wide range of purposes, from helping individuals plan their daily activities to providing critical information during severe weather events. They are valuable tools for staying informed and prepared for various weather conditions.',
  },
  {
    title: 'Login Page',
    image: LoginPageImage,
    description: 'Description of Project 2.',
  },
  {
    title: 'Email Notifications',
    image: EmailNotificationsImage,
    description: 'Description of Project 3.',
  },
  {
    title: 'Google OAuth',
    image: GoogleOAuthImage,
    description: 'Description of Project 4.',
  },
  {
    title: 'WordPress',
    image: WordPressImage,
    description: 'Description of Project 5.',
  },
];

const Project = ({ project, isActive, onClick }) => (
  <div className={`mySlides ${isActive ? 'active' : ''}`}>
   
    <img src={project.image} style={{ width: '100%' }} alt={project.title} />
    <div className="caption-container">
      <p id="caption">{project.title}</p>
    </div>
  </div>
);

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const plusSlides = (n) => {
    const newIndex = (currentSlide + n + projectsData.length) % projectsData.length;
    setCurrentSlide(newIndex);
  };

  const selectSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="container">
      <h2>PROJECTS</h2>
      <p>Explore a selection of my personal projects, each accompanied by its own detailed case study</p>
      <div className="project-container">
        {projectsData.map((project, index) => (
          <Project
            key={index}
            project={{ ...project, index }}
            isActive={currentSlide === index}
          />
        ))}

        <button className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </button>
        <button className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </button>

        <div className="row">
          {projectsData.map((project, index) => (
            <div className="column" key={index}>
              <button className="demo cursor" onClick={() => selectSlide(index)}>
                <img
                  src={project.image}
                  style={{ width: '100%' }}
                  alt={project.title}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
