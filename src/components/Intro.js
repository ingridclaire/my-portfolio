import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';


const Intro = () => {
  return <div>
    <Row>
      <Col lg={6} md={12} sm={12}>
        <img id="intro-img" src='/images/computer.png' alt='ingrid with computer' />
      </Col>
      <Col lg={6} md={12} sm={12} id="intro-welcome">
        <h3>Hi, I'm Ingrid!</h3>
        <p id="intro-par">Before becoming an engineer, I worked as an educator and leadership coach for over a decade with students and clients of various ages. My love for teaching never faded, so I decided to build a career as a freelance web developer and JavaScript instructor.<br /><br />If you need a clean, beautiful website for your business or brand, OR if you are looking for a mentor to help you level up your skills, head over to the contact page to reach out!</p>
      </Col>
    </Row>
    <Row id="intro-row-2">

      <Col md={12} sm={12}>
        <h2 id="title-descriptor"><strong>Full Stack Engineer, Designer, and Instructor</strong></h2>
      </Col>
      <Col md={12} sm={12}>
        <h4>I love buiding creative, beautiful applications</h4>
      </Col>
    </Row>



  </div>
}

export default Intro;