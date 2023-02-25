import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/press.css";

const Press = ({ banner }) => {
  return (
    <Carousel className="carousel1" fade>
      {banner.end.map((item, index) => (
        <Carousel.Item
          interval={1000}
          key={item.image}
          id={banner}
          keyboard={true}
        >
          <a href="/">
            <img
              className="d-block w-100"
              src={item.image}
              alt={`${index} banner`}
              id="bannerImage"
            />
          </a>
          <Carousel.Caption>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.source}</p>
            <u>Read more</u>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Press;
