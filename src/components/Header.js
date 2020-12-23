import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


function Header() {
 
  return (
    <header id="header-container">
      <Navbar fixed="top" id="header-container" bg="dark" variant="dark" expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand id="brand-color">WONDERFUL WORLD OF CODE</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className="ml-auto">
              <LinkContainer to='/portfolio'>
                <Nav.Link className="nav-text" id="nav-text">Portfolio</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/tutoring'>
                <Nav.Link className="nav-text" id="nav-text">Tutoring</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/contact'>
                <Nav.Link className="nav-text" id="nav-text">Contact Me</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </header>
  );
}

export default Header;