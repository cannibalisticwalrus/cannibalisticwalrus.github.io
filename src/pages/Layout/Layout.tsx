import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import "./Layout.css";

const Layout = () => {

  const getShowSidebar = () => window.innerWidth >= 768; //A function that returns whether user is using an XS(read mobile) window or not
  const [showSidebar, setShowSidebar] = useState(getShowSidebar); //Use State hook to provide state for the showSidebar variable

  const handleShowSidebar = () => { //The function that is called in the vDOM to return whether the sidebar should be available or not
    setShowSidebar(!showSidebar);
    //console.log({ showSidebar }); //Test code...to be deleted when feature is done
  };

  useEffect(() => {
    const onResize = () => {
      setShowSidebar(getShowSidebar());
    }

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    }
  }, []);

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
