import React from "react";
// import logo from "./interstate.png";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function NavBar() {
  return (
    <>
    <Navbar expand="lg">
      <Navbar.Brand href="#home">
        {/* <img src={logo} style={{ width: 200 }} alt="Logo" /> */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="me-auto" className="justify-content-end">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link eventKey={2} href="#projects">
            Our Properties
          </Nav.Link>
          <Nav.Link eventKey={3} href="#contact">
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default NavBar;
