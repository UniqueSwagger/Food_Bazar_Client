import React from "react";
import { Col, Row } from "react-bootstrap";
import HeroCarousel from "../HeroCarousel/HeroCarousel";
import HeroBanner from "../HeroBanner/HeroBanner";
import HeroServices from "../HeroServices/HeroServices";
const HeroSection = () => {
  return (
    <div className="px-3 py-5 ">
      <Row className="w-100 h-100">
        <Col xs={12} lg={7}>
          <HeroCarousel />
        </Col>
        <Col xs={12} lg={5}>
          <HeroBanner />
        </Col>
      </Row>
      <HeroServices />
    </div>
  );
};

export default HeroSection;
