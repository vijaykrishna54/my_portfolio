import React from 'react';
import './stylesforcomponents/Projects.css';
import WeatherAppImage from './component_images/Weather_app.jpeg'; 

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className='heading'>PROJECTS</h2>
      <p className='small-intro'>Explore a selection of my personal projects, each accompanied by its own detailed case study</p>

      <div className="content-container">
       
        <div className="image-container">
          <img src={WeatherAppImage} alt="Weather App" /> 
        </div>

        <div className="description-container">
          <h2 className='project_name'>TaskWeather_Hub</h2>
          <p>TaskWeather_Hub is a versatile and user-friendly React application that seamlessly combines two essential features - a to-do list and real-time weather information. It's designed to help you stay organized and informed, all in one place.</p>
          <p>To-Do List: TaskWeather offers a robust to-do list manager. You can easily add, edit, and delete tasks. Tasks can be organized into categories or priorities, making it simple to stay on top of your daily, weekly, or monthly goals.</p>

          <p>Weather Details: Stay informed about the weather conditions in your area or any location you choose. The app fetches real-time weather data, including temperature, humidity, wind speed, and more. You can view current weather conditions and forecasts to plan your day accordingly.</p>
        </div>

      </div>

      <div>
      <button className="case-study">
            Case Study
          </button>
      </div>


    </div>
  );
};

export default Projects;
