import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <nav>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/Resume">Resume</Link>
        </li>
        <li>
          <Link to="/Portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="./Blog">Blog</Link>
        </li>
      </nav>

      <Outlet />
    </>
  );
}
export default Layout;
