import React from 'react';
import './stylesforcomponents/About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-heading">ABOUT ME</h2>
      <div className='small-intro'>
        <p>
            I am a MERN stack web developer with a passion for creating web applications that deliver a great user experience.
          </p>
        </div>
      <div className="content-container">
        
       
        <div className="details">
          <p>
            As a web developer with expertise in the MERN stack, I am passionate about building robust and scalable web applications that deliver exceptional user experiences.
          </p>
          <p>
            I have a solid foundation in JavaScript, Node.js, React, and MongoDB, as well as HTML5 and CSS. I have successfully completed multiple projects across the full software development lifecycle, from conceptualization to deployment, in my previous role at TCS, a leading IT services company.
          </p>
          <p>
            I have recently completed a post-degree diploma in web and mobile application design and development at Langara College, where I enhanced my skills and knowledge of the latest industry trends and technologies. I am driven by a desire to learn new things and solve complex challenges, and I am always eager to adopt best practices and deliver cutting-edge solutions. I am looking for opportunities to join a dynamic and innovative team, where I can contribute to the success of web and mobile applications that exceed client expectations.
          </p>
          <p>
            Feel free to connect with me on{' '}
            <a
              href="https://www.linkedin.com/in/vijay-krishna-yarabarla"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
        <div className="skills">
          <h3>My Skills:</h3>
          <div className="skill-buttons">
            <button className="skill-button">HTML 5</button>
            <button className="skill-button">CSS 3</button>
            <button className="skill-button">JavaScript</button>
            <button className="skill-button">MongoDB</button>
            <button className="skill-button">Express.js</button>
            <button className="skill-button">React</button>
            <button className="skill-button">Node.js</button>
            <button className="skill-button">WordPress</button>
            <button className="skill-button">Git</button>
            <button className="skill-button">GitHub</button>
            <button className="skill-button">Postman</button>
            <button className="skill-button">Figma</button>
            <button className="skill-button">AWS Cloud</button>
            <button className="skill-button">Python</button>
            <button className="skill-button">GraphQL</button>
            <button className="skill-button">SQL</button>
            <button className="skill-button">React Native</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
