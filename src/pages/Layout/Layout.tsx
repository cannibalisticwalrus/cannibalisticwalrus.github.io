import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
    console.log({ showSidebar });
  };

  const [showHamburger, setShowHamburger] = useState(window.innerHeight >= 600);

  const handleShowHamburger = () => {
    setShowHamburger(window.innerHeight >= 600);
    console.log({showHamburger});
  }


  return (
    <>
      <div className="Root" id="#root">
        <div className="SidebarContainer">
          {showHamburger ? (
            <div className="MenuIcon" onClick={handleShowSidebar}>
              {showHamburger}
            </div>
          ) : (
            <div>{showHamburger}</div>
          )}
          {showSidebar ? (
            <nav>
              <div className="NavItem">
                <Link className="NavItemText" to="/Resume">
                  Resume
                </Link>
              </div>
              <div className="NavItem">
                <Link className="NavItemText" to="/Portfolio">
                  Portfolio
                </Link>
              </div>
              <div className="NavItem">
                <Link className="NavItemText" to="/">
                  About
                </Link>
              </div>
              <div className="NavItem">
                <Link className="NavItemText" to="./Blog">
                  Blog
                </Link>
              </div>
            </nav>
          ) : null}

          <div className="EmptyForFlexJustifyContent"></div>
        </div>
        <div className="OutletContainer">
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Layout;
