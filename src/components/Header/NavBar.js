import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './style.scss';

function NavBar({isDark}) {
  return (
    <Navbar expand="lg" bg={isDark ? "primary" : "secondary"} variant={isDark ? "dark" : "light"} sticky="top" collapseOnSelect>
      <Container>
        <Navbar.Brand as={NavLink} to="/">Lea's portefolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" onSelect={(eventKey) => console.log(eventKey)}>
            <Nav.Link as={NavLink} to="/" eventKey="Home">HOME</Nav.Link>
            <Nav.Link as={NavLink} to="/my-resume" eventKey="Resume">MY RESUME</Nav.Link>
            <Nav.Link as={NavLink} to="/projects" eventKey="Projects">MY PROJECTS</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/contact" eventKey="Contact">CONTACT ME</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
