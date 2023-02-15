import "./Portfolio.scss";
import TestImage from "../../Ford_logo_flat.svg.png";
import PortfolioGridItem from "../../components/PortfolioGridItem/PortfolioGridItem";

const Portfolio = () => {
  return (
    <div className="PortfolioRoot">
      <h1>Portfolio</h1>
      <div className="PortfolioBody">
        <div>Coming Soon! But you can see the test below!</div>
        <div className="PortfolioDisplay">
          <PortfolioGridItem></PortfolioGridItem>
          <PortfolioGridItem></PortfolioGridItem>
          <PortfolioGridItem></PortfolioGridItem>
          <PortfolioGridItem></PortfolioGridItem>
          <PortfolioGridItem></PortfolioGridItem>
          <PortfolioGridItem></PortfolioGridItem>
          <PortfolioGridItem></PortfolioGridItem>
          <PortfolioGridItem></PortfolioGridItem>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
