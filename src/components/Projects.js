import React, { useState } from 'react';
import './stylesforcomponents/Projects.css'; 

const projectsData = [
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
    title: 'Google OAuth',
    image: require('./component_images/google_oauth.jpeg'),
    description: 'Description of Project 4.',
  },
  {
    title: 'WordPress',
    image: require('./component_images/word_press.jpeg'),
    description: 'Description of Project 5.',
  },
];

const Project = ({ project, isActive, onClick }) => (
  <div className={`mySlides ${isActive ? 'active' : ''}`}>
    <div className="numbertext">{project.index + 1} / {projectsData.length}</div>
    <img src={project.image.default} style={{ width: '100%' }} alt={project.title} />
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
      <h2>Projects</h2>
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
                  src={project.image.default}
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
