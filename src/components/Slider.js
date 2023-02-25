import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/slider.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Slider = ({ start }) => {
  return (
    <Carousel className="carousel" fade>
      {start.map((item) => (
        <Carousel.Item interval={3000}>
          <a href="/">
            <img className="d-block w-100" src={item} alt="First slide" />
          </a>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
