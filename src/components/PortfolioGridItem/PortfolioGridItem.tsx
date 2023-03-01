import React, { useState } from "react";
import PortfolioSlideInComponent from "../PortfolioSlideIn/PortfolioSlideIn";
import "./PortfolioGridItem.scss";

interface GridItem {
  imgPath: string;
  title: string;
  description: string;
  link?: string;
  price?: string;
}

const PortfolioGridItem = (props: GridItem) => {
  const togglePopUp = () => {
    setShowDescription(!showDescription);
  };
  const spawnPopUp = () => {
    setShowDescription(true);
    console.log("spawned");
  };
  const killPopUp = () => {
    setShowDescription(false);
    console.log("killed");
  };

  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="GridItem" id="#root">
      <div className="GridItemContent" onClick={spawnPopUp}>
        <img
          className="GridImage"
          src={props.imgPath}
          alt="Test Images Found At https://picsum.photos/350"
        />
        <div className="GridItemTextContainer">
          <div className="GridItemText">{props.title}</div>
        </div>
      </div>
      {showDescription ? (
        <PortfolioSlideInComponent
          title={props.title}
          imgPath={props.imgPath}
          description={props.description}
          togglePopUp={killPopUp}
        ></PortfolioSlideInComponent>
      ) : null}
    </div>
  );
};
export default PortfolioGridItem;
