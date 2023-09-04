import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import './stylesforcomponents/Home.css';

const Home = () => {
  // Function to determine weather condition
  const getWeatherCondition = () => {
    if (weatherData.weather) {
      const weather = weatherData.weather[0].main;
      console.log(`Today's Weather has : ${weather}`)
      if (weather.toLowerCase().includes('cloud')) {
        return 'Cloudy';
      } else if (weather.toLowerCase().includes('clear')) {
        return 'Sunny';
      } else if (weather.toLowerCase().includes('rain')) {
        return 'Rainy';
      }
    }
    return 'Default';
  };

  //Defined hooks to get weather data, check if weather container is open or not, set background image as per current weather
  const [weatherData, setWeatherData] = useState({});
  const [weatherContainerOpen, setWeatherContainerOpen] = useState(true);
  const [currentWeather, setCurrentWeather] = useState(getWeatherCondition());

  //Defined API key here, later will be moved to .env file
  const apiKey = '117b02e3aaa2af071272a21ccd6818ff'; 

  //Defined city here, later will be changed as per user's location
  const city = 'Vancouver'; 
  console.log(weatherData);
  
  // Map weather conditions to background images
  const weatherBackgrounds = {
    Cloudy: 'url(/public/images/cloudy_image.jpeg)',
    Sunny: 'url(/public/images/sunny_image.jpeg)',
    Rainy: 'url(/public/images/rainy_image.jpeg)',
    Default: 'url(/public/images/blue_pattern.jpeg)',
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [city, apiKey]);

  // Function to toggle weather container open/close
  const toggleWeatherContainer = () => {
    setCurrentWeather(getWeatherCondition());
    setWeatherContainerOpen(!weatherContainerOpen);
  };

  return (
    <div className="home-container">
     
      <div
        className={`weather-container ${weatherContainerOpen ? 'open' : 'closed'}`}
        
        style={{
          backgroundImage: weatherContainerOpen ? weatherBackgrounds[currentWeather] : weatherBackgrounds['Default'],
        }}
      >
        <button className="close-button" onClick={toggleWeatherContainer}>
          x
        </button>
        {weatherContainerOpen ? (
          <>
            <h2>Weather Details</h2>
            <p>Temperature: {weatherData.main?.temp}°C</p>
            <p>Weather Condition: {getWeatherCondition()}</p>
          </>
        ) : (
          <FontAwesomeIcon icon={faCloud} className='cloud-icon' />
        )}
      </div>

      <div className='text-container' style={{
          backgroundImage: weatherContainerOpen ? weatherBackgrounds[currentWeather] : weatherBackgrounds['Default'],
        }}>
        <h1>Hey! I am Vijay Krishna</h1>
        <p>A Full-stack web developer building modern websites and web applications that lead to the success of the overall product!</p>
      </div>

    </div>
  );
};

export default Home;
