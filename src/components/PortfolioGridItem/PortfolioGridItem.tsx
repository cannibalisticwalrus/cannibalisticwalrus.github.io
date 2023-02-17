import React from "react";
import "./PortfolioGridItem.scss";
import TestImage from "../../Ford_logo_flat.svg.png";

interface GridItem {
  imgPath: string;
  title: string;
  description: string;
  link?: string;
  price?: string;
}

const PortfolioGridItem = (props: GridItem) => {
  return (
    <div className="GridItem">
      <div className="GridItemContent">
        <img
          className="GridImage"
          src={props.imgPath}
          alt="Test Images Found At https://picsum.photos/350"
        />
        <div className="GridItemTextContainer">
          <div className="GridItemText">{props.title}</div>
        </div>
      </div>
    </div>
  );
};
export default PortfolioGridItem;
