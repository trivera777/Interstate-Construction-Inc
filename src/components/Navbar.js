import React from "react";
import "./navbar.css";
// import logo from "../interstate.png";
import { Navbar, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <>
      <Navbar className="navbar" sticky="top" expand="lg">
        <Navbar.Brand href="#home">
          {/* <img src={logo} style={{ width: 200 }} alt="Logo" /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto" className="justify-content-end">
            <Nav.Link href="#about">Home</Nav.Link>
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
  );
}

export default NavBar;
