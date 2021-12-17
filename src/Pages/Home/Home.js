import React from "react";
import FeaturedCategories from "../../Components/Categories/FeaturedCategories/FeaturedCategories";
import DailyShopping from "../../Components/DailyShopping/DailyShopping";
import HeroSection from "../../Components/Hero/HeroSection.js/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedCategories />
      <div style={{ background: "#F9FAFB" }}>
        <DailyShopping />
      </div>
    </div>
  );
};

export default Home;
