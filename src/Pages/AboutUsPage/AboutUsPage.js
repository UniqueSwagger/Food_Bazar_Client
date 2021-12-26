import React from "react";
import AboutUs from "../../Components/AboutUs/AboutUs";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";

const AboutUsPage = () => {
  return (
    <div>
      <BreadCrumb title="About Us" />
      <AboutUs />
    </div>
  );
};

export default AboutUsPage;
