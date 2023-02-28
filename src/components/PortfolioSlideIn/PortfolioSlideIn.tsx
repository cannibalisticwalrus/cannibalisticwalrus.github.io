import React from "react";
import "./PortfolioSlideIn.scss";


interface portfolioObject{
    imgPath: string;
    title: string;
    description: string;
    link?: string;
    price?: string;
}

const PortfolioSlideInComponent = (props: portfolioObject) => {
    return(<div id="#root">
        <div className="SlideinHeader">{props.title}</div>
        <img src={props.imgPath}></img>
        <div className="SlideinDescription">{props.description}</div>
    </div>);
}

export default PortfolioSlideInComponent; 