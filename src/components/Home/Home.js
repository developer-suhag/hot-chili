import React from "react";
import FoodTabs from "./FoodTabs/FoodTabs";
import HeroSection from "./HeroSection/HeroSection";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <FoodTabs></FoodTabs>
    </div>
  );
};

export default Home;
