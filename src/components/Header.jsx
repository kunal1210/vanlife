import React from "react";
import logo from "../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="nav">
            <div className="logo">
              <Link to=".">
                <img src={logo} />
              </Link>
            </div>
            <div className="nav_links">
              <ul>
                <li>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : null)}
                    to="about"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : null)}
                    to="host"
                  >
                    Host
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : null)}
                    to="vans"
                  >
                    Vans
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
