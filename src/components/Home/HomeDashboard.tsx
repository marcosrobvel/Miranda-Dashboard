import React from "react";
import { StyledBackground } from "../styled-components/HomeKPIs";
import HomeKPIs from "./HomeKPIs";
import SliderReviews from "./Reviews/SliderReviews";

const HomeDashboard: React.FC = () => {
  return (
    <StyledBackground className="HomeDashboard-container">
      <HomeKPIs />
      <SliderReviews />
    </StyledBackground>
  );
};

export default HomeDashboard;
