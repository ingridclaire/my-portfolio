import React from 'react';
import Intro from './Intro';
import { Container, Row, Col } from 'react-bootstrap';
import About from './About';

function Home() {
 
  return (
    <Container>

        <Intro />
        <About />
    </Container>
  );
}

export default Home;
