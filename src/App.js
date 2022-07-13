import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="sections">
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
 
export default App;
