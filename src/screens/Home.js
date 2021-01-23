import React from 'react';
import Intro from '../components/Intro';
import { Container, Row, Col } from 'react-bootstrap';
import About from '../components/About';

function Home() {
 
  return (
    <Container>
        <Intro />
        <About />
    </Container>
  );
}

export default Home;
