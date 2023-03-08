import { Link } from "wouter";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
  return (
    <Navbar expand="lg" className="navbar-style--bg-color">
      <Container>
        <Link to="/zencart" className="navbar-style__link">
          <img
            src="https://img.freepik.com/iconos-gratis/carrito-compras_318-661842.jpg?w=2000"
            width="30"
            height="30"
            className="d-inline-block align-top me-3"
            alt="React Bootstrap logo"
          />
          <Navbar.Brand className="navbar-style__text">ZenCart</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/zencart">
              <Nav.Link className="navbar-style__text">Home</Nav.Link>
            </Link>
            <Link to="/zencart/login">
              <Nav.Link className="navbar-style__text">Log in</Nav.Link>
            </Link>
            <Link to="/zencart/register">
              <Nav.Link className="navbar-style__text">Register</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
