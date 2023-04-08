import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './style.scss';

function NavBar({isDark}) {
  return (
    <Navbar expand="lg" bg={isDark ? "primary" : "secondary"} variant="light" sticky="top" collapseOnSelect>
      <Container>
        <Navbar.Brand as={NavLink} to="/">Lea's portefolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" onSelect={(eventKey) => console.log(eventKey)}>
            <Nav.Link as={NavLink} to="/" eventKey="Home">HOME</Nav.Link>
            <Nav.Link as={NavLink} to="/my-resume" eventKey="Resume">MY RESUME</Nav.Link>
            <NavDropdown title="MY PROJECTS" id="collasible-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/projects" eventKey="Project 0">All my projects</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="https://fitwork-app.netlify.app/" eventKey="Project 1">Go to Fit Work</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="https://trouve-ton-profil-github.netlify.app" eventKey="Project 2">
              Go to GitHub Research
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="" eventKey="Project 3">
                Go to Converter
              </NavDropdown.Item>
            </NavDropdown>
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
