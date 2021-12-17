import React from "react";
import Carousel from "react-multi-carousel";
import slider1 from "../../../images/slider-1.jpg";
import slider2 from "../../../images/slider-2.jpg";
import slider3 from "../../../images/slider-3.jpg";
import { Button } from "react-bootstrap";
import "./HeroCarousel.css";
import "react-multi-carousel/lib/styles.css";
const HeroCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <Carousel
      infinite
      autoPlaySpeed={3000}
      autoPlay
      arrows={false}
      showDots={true}
      responsive={responsive}
    >
      <div className="slider">
        <img src={slider1} alt="slider1" />
        <div className="slider-content flex-start">
          <h3>The Best Quality Products Guaranteed!</h3>
          <p className="py-md-1 py-0">
            Dramatically facilitate effective total linkage for go forward
            processes...
          </p>
          <Button
            style={{ width: "30%" }}
            variant="success"
            className="shadow-none"
          >
            Shop Now
          </Button>
        </div>
      </div>
      <div className="slider">
        <img src={slider2} alt="slider2" />
        <div className="slider-content flex-start">
          <h3>Best Different Type of Grocery Store...</h3>
          <p className="py-md-1 py-0">
            Quickly aggregate empowered networks after emerging products...
          </p>
          <Button
            style={{ width: "30%" }}
            variant="success"
            className="shadow-none"
          >
            Shop Now
          </Button>
        </div>
      </div>
      <div className="slider">
        <img src={slider3} alt="slider3" />
        <div className="slider-content flex-start">
          <h3>Quality Freshness Guaranteed!</h3>
          <p className="py-md-1 py-0">
            Intrinsically fashion performance based products rather than
            accurate benefits...
          </p>
          <Button
            style={{ width: "30%" }}
            variant="success"
            className="shadow-none"
          >
            Shop Now
          </Button>
        </div>
      </div>
    </Carousel>
  );
};
export default HeroCarousel;
