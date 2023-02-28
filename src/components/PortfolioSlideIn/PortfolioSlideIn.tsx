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
        <img src={props.imgPath}></img>
    </div>);
}

export default PortfolioSlideInComponent;