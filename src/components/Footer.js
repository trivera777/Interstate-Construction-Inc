import React from "react";
import './footer.css'
// import { Nav } from "react-bootstrap";


function Footer() {
  return (
  <footer className="footer-basic">
    <ul class="list-inline">
                <li class="list-inline-item"><a href="#">Home</a></li>
                <li class="list-inline-item"><a href="#">Services</a></li>
                <li class="list-inline-item"><a href="#">About</a></li>
                <li class="list-inline-item"><a href="#">Terms</a></li>
                <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p class="copyright">Company Name © 2018</p>
  </footer>
  );
}

export default Footer;