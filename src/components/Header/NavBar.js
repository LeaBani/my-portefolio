import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './style.scss';

function NavBar() {
  return (
    <Navbar expand="lg" bg="primary" variant="dark" sticky="top" collapseOnSelect>
      <Container>
        <Navbar.Brand as={NavLink} to="/">Lea's portefolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" onSelect={(eventKey) => console.log(eventKey)}>
            <Nav.Link as={NavLink} to="/" eventKey="Home">HOME</Nav.Link>
            <Nav.Link as={NavLink} to="/my-resume" eventKey="Resume">MY RESUME</Nav.Link>
            <NavDropdown title="MY PROJECTS" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" eventKey="Project">Fit Work</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"  eventKey="Project">
              Search GitHub Profils
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"  eventKey="Project">
                Reveday
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">CONTACT ME</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
