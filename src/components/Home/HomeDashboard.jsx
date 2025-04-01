import { StyledBackground } from "../styled-components/HomeKPIs";
import HomeKPIs from "./HomeKPIs";
import SliderReviews from "./Reviews/SliderReviews";



export default function HomeDashboard() {
  return (
    <>
      <StyledBackground className="HomeDashboard-container">
          <HomeKPIs />
          <SliderReviews />
      </StyledBackground>
    </>
  );
}