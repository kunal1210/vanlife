import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import VanDetail from "./pages/Vans/VanDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vans from "./pages/Vans/Vans";
import Dashboard from "./pages/Host/Dashboard";
import "./server";
import Layout from "./components/Layout";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVanDetail from "./pages/Host/HostVanDetail";
import HostVans from "./pages/Host/HostVans";
import { VansInfo } from "./pages/Host/VansInfo";
import { VansPricing } from "./pages/Host/VansPricing";
import {VansPhotos} from "./pages/Host/VansPhotos"
function App() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<VansInfo/>}/>
              <Route path="pricing" element={<VansPricing/>}/>
              <Route path="photos" element={<VansPhotos/>}/>
              </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
