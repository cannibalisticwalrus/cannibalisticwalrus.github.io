import React from "react";
import "./PortfolioGridItem.scss";
import TestImage from "../../Ford_logo_flat.svg.png";

const PortfolioGridItem = () => {
  return (
    <div className="GridItem">
      <div className="GridItemContent">
        <img
          className="GridImage"
          src={TestImage}
          alt="Ford Logo Found at: https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg"
        />
        <div className="GridItemTextContainer">
          <div className="GridItemText">This is a test.</div>
        </div>
      </div>
    </div>
  );
};
export default PortfolioGridItem;
