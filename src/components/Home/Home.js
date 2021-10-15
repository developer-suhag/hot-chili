import React from "react";
import FoodTabs from "./FoodTabs/FoodTabs";
import HeroSection from "./HeroSection/HeroSection";

import "./Home.css";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <FoodTabs></FoodTabs>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;
