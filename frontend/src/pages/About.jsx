import React from 'react';
// import './About.css'; // optional - create this file for custom styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About TaskPilot</h1>
      <p>
        TaskPilot is your intelligent task management companion — designed to help you stay
        productive, organized, and ahead of deadlines.
      </p>
      <h2>Our Mission</h2>
      <p>
        We aim to empower individuals and teams with tools that blend speed, smart insights,
        and collaboration into one seamless platform.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Lightning fast task creation and management</li>
        <li>AI-powered workflow optimization</li>
        <li>Team collaboration with real-time sync</li>
      </ul>
    </div>
  );
};

export default About;