import React from 'react';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Header from './components/Header'
import Footer from './components/Footer';
import Tutoring from './components/Tutoring';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="py-3">
        <Container>
          <Route path="/" component={Home} exact />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path='/tutoring' component={Tutoring} />
        </Container>
      </div>
      <Footer />
    </Router>
  )
}

export default App;