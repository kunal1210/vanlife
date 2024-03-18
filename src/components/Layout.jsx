import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
const Layout = () => {
  return (
    <div className="layout">
      <div className="layout-inner">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
