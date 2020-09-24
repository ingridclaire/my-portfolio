import React from 'react';
import './App.css';

const Intro = () => {
  return <div className="intro-container">
    <h1 className='intro-text-title'><strong>Full Stack Engineer, Designer, and Instructor</strong></h1>
    <h2 className="intro-text-tagline">I love buiding simple, beautiful applications</h2>
   
    <div className="intro-greeting">
      <h2 className="intro-greeting-title">Hi, I'm Ingrid!</h2>
      <p className="intro-greeting-text">Before becoming an engineer, I worked as an educator and leadership coach for over a decade with students and clients of various ages. My love for teaching never faded, so I decided to build a career as a freelance web developer and JavaScript instructor. If you need a clean, beautiful website for your business or brand, OR if you are looking for a mentor to help you level up your skills, head over to the contact page to reach out!</p>
    </div>
  </div>
}

export default Intro;