import React from "react";
import "./projects.css";
import Carousel from "react-bootstrap/Carousel";
import background from "../mountains2.jpg";

function CarouselFadeExample() {
  return (
    <div className="projects" id="projects">
        <h3>Images</h3>
      <div className="carousel">
        <Carousel 
        style={{width: "70vw", height: "70%"}}
        fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={background}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={background}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.pexels.com/photo/brown-rocky-mountain-under-a-calm-blue-sky-3390971/"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselFadeExample;
