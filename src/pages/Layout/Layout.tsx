import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import "./Layout.css";

const Layout = () => {
  const [showSidebar, setShowSidebar] = useState(window.innerWidth >= 768);

  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
    console.log({ showSidebar });
  };

  return (
    <>
      <div className="Root" id="#root">
        <div className="SidebarContainer">
          <div className="MenuIcon" onClick={handleShowSidebar}>
            <Hamburger toggled={showSidebar} color="#ffffff"></Hamburger>
          </div>
          <div className="MenuIconEmpty">
          </div>
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
