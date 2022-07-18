import React from "react";
import './footer.css'
import { Nav } from "react-bootstrap";


function Footer() {
  return (
  <footer>
      ©footer
    <div className="links">
    <Nav.Link href="#about">Home</Nav.Link>
            <Nav.Link eventKey={2} href="#projects">
              Our Properties
            </Nav.Link>
            <Nav.Link eventKey={3} href="#contact">
              Contact Us
            </Nav.Link>
    </div>
  </footer>
  );
}

export default Footer;