import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const HostLayout = () => {
  return (
    <>
      <div className="inner_nav">
        <div className="container">
          <ul>
            <li>
              <NavLink
                to=""
                end
                className={({ isActive }) => (isActive ? "active" : null)}
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : null)}
                to="income"
              >
                Income
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : null)}
                to="reviews"
              >
                Reviews
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
      <Outlet />
    </>
  );
};

export default HostLayout;
