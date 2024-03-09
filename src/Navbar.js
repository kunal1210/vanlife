import React from "react";
import logo from "./assets/images/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="nav">
            <div className="logo">
              <Link to="/">
                <img src={logo} />
              </Link>
            </div>
            <div className="nav_links">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
