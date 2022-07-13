import React from "react";
import './about.css'
import background from "../mountains.jpeg";

function About() {
  return <div className="about" id="about" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>about</div>;
}

export default About;
