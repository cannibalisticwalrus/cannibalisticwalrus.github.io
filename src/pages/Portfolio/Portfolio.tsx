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
          <div className="GridItemContainer">
            This item is a Local Portfolio Grid Item Test
          </div>
          {/* <div className="GridItemPapa">
            <img
              className="GridItem"
              src={TestImage}
              alt="Ford Logo Found at: https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg"
            />
            <div className="TextContent">
              <div className="Text">This is a test.</div>
            </div>
          </div> */}

          <div className="GridItemContainer">
            This item is an Portfolio Grid Item Component Test
          </div>
          <div className="GridItemContainer">
            <PortfolioGridItem></PortfolioGridItem>
          </div>

          <div className="GridItemContainer">Items after this are just images with the GridItem classname</div>
          <img
            className="GridItemContainer"
            src={TestImage}
            alt="Ford Logo Found at: https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg"
          />
          <img
            className="GridItemContainer"
            src={TestImage}
            alt="Ford Logo Found at: https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg"
          />
          <img
            className="GridItemContainer"
            src={TestImage}
            alt="Ford Logo Found at: https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg"
          />
          <img
            className="GridItemContainer"
            src={TestImage}
            alt="Ford Logo Found at: https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg"
          />
          <img
            className="GridItemContainer"
            src={TestImage}
            alt="Ford Logo Found at: https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg"
          />
          <img
            className="GridItemContainer"
            src={TestImage}
            alt="Ford Logo Found at: https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg"
          />
          <img
            className="GridItemContainer"
            src={TestImage}
            alt="Ford Logo Found at: https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg"
          />
          <img
            className="GridItemContainer"
            src={TestImage}
            alt="Ford Logo Found at: https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
