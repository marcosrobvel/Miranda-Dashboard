import { StyledBackground } from "../styled-components/HomeKPIs";
import HomeKPIs from "./HomeKPIs";



export default function HomeDashboard() {
  return (
    <>
      <StyledBackground className="HomeDashboard-container">
          <HomeKPIs />
      </StyledBackground>
    </>
  );
}