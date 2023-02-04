import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <div className="Root">
        <div className="SidebarContainer">
          <nav>
            <div className="NavItem">
              <Link className="NavItemText" to="/">
                Home
              </Link>
            </div>
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
              <Link className="NavItemText" to="/About">
                About
              </Link>
            </div>
            <div className="NavItem">
              <Link className="NavItemText" to="./Blog">
                Blog
              </Link>
            </div>
          </nav>
        </div>
        <div className="OutletContainer">
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Layout;
