import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <div className="Root">
        <nav>
          <li className="NavItem">
            <Link to="/">Home</Link>
          </li>
          <li className="NavItem">
            <Link to="/Resume">Resume</Link>
          </li>
          <li className="NavItem">
            <Link to="/Portfolio">Portfolio</Link>
          </li>
          <li className="NavItem">
            <Link to="/About">About</Link>
          </li>
          <li className="NavItem">
            <Link to="./Blog">Blog</Link>
          </li>
        </nav>
      </div>

      <Outlet />
    </>
  );
};
export default Layout;
