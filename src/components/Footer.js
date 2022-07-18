import React from "react";
import './footer.css'
// import { Nav } from "react-bootstrap";


function Footer() {
  return (
  <footer className="footer-basic">
    <ul class="list-inline">
                <li class="list-inline-item"><a href="#about">Home</a></li>
                <li class="list-inline-item"><a href="#projects">Our Properties</a></li>
                <li class="list-inline-item"><a href="#contact">Contact Us</a></li>
                <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p class="copyright">Company Name © 2018</p>
  </footer>
  );
}

export default Footer;