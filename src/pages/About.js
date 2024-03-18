import React from "react";
import { Link } from "react-router-dom";
import banner from "../assets/images/about_banner.jpg";

const About = () => {
  const bgStyle = {
    backgroundImage: `url(${banner})`,
  };
  return (
    <div className="about_page">
      <div className="banner" style={bgStyle}></div>
      <div className="container">
        <div className="content">
          <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
          <br />

          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <div className="bottom_pane">
          <div className="content">
            <h3>Your destination is waiting. Your van is ready.</h3>
            <br />
            <Link to="../vans" className="btn btn_black">
              Explore our vans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
