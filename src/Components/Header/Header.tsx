import "./Header.scss";

import ResumeButton from "../ResumeButton/ResumeButton";
import { Squash as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";

const Header = () => {
  const isWindowWidthSmall = () => window.innerWidth <= 768;
  const [showHeader, setShowHeader] = useState(false);
  const handleShowHeader = () => {
    setShowHeader(!showHeader);
  };

  useEffect(() => {
    const onResize = () => {
      setShowHeader(false);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="PageHeader">
      <div className="SmallScreenHeader" onClick={handleShowHeader}>
        <Hamburger toggled={showHeader}></Hamburger>
      </div>
      <div className="LargeScreenHeader">
        <a className="PageHeaderLink RedHover" href="#Introduction">
          Intro
        </a>
        <a className="PageHeaderLink OrangeHover" href="#AboutMe">
          About Me
        </a>
        <a className="PageHeaderLink YellowHover" href="#Experience">
          Experience
        </a>
        <a className="PageHeaderLink GreenHover" href="#Projects">
          Projects
        </a>
        <a className="PageHeaderLink BlueHover" href="#ContactMe">
          Contact Me
        </a>
        <ResumeButton></ResumeButton>
      </div>
      {showHeader ? (
        <div className="Sidebar">
          <div className="SidebarLinks">
            {" "}
            <a className="PageHeaderLink RedHover" href="#Introduction">
              Intro
            </a>
            <a className="PageHeaderLink OrangeHover" href="#AboutMe">
              About Me
            </a>
            <a className="PageHeaderLink YellowHover" href="#Experience">
              Experience
            </a>
            <a className="PageHeaderLink GreenHover" href="#Projects">
              Projects
            </a>
            <a className="PageHeaderLink BlueHover" href="#ContactMe">
              Contact Me
            </a>
            <ResumeButton></ResumeButton>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
