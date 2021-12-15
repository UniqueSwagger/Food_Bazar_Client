import React from "react";
import banner1 from "../../../images/banner-1.jpg";
import banner2 from "../../../images/banner-2.jpg";
import "./HeroBanner.css";
const HeroBanner = () => {
  return (
    <div className="d-lg-flex d-none flex-column gap-2 heroBanner">
      <img src={banner1} alt="banner1" />
      <img src={banner2} alt="banner2" />
    </div>
  );
};

export default HeroBanner;
