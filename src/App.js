import React from "react";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
