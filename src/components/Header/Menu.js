import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './style.scss';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Lea's portefolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">HOME</Nav.Link>
            <Nav.Link href="#pricing">MY RESUME</Nav.Link>
            <NavDropdown title="MY PROJECTS" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Fit Work</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Search GitHub Profils
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
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
