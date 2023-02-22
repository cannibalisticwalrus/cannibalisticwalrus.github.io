import React from "react";
import "./PortfolioGridItem.scss";

interface GridItem {
  imgPath: string;
  title: string;
  description: string;
  link?: string;
  price?: string;
}

const PortfolioGridItem = (props: GridItem) => {
  return (
    <div className="GridItem" id="#root">
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
