import React from "react";
import "./PortfolioSlideIn.scss";

interface portfolioObject {
  imgPath: string;
  title: string;
  description: string;
  link?: string;
  price?: string;
  togglePopUp: () => void;
}

const PortfolioSlideInComponent = (props: portfolioObject) => {
  return (
    <div id="#root" className="SlideinRoot">
      <div className="SlideinFrontPanel">
        <span className="SlideinCloseButton" onClick={props.togglePopUp}>x</span>
        <div className="SlideinHeader">{props.title}</div>
        <img className="SlideinImage" src={props.imgPath}></img>
        <div className="SlideinDescription">{props.description}</div>
      </div>
    </div>
  );
};

export default PortfolioSlideInComponent;
