import React from 'react';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import './App.css'


//App should be actuall load from here...
const App = () => {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default App;
