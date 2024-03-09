import React from "react";
import { Link } from "react-router-dom";
import hero_background from "../assets/images/hero.jpg";

const Home = () => {
  const bgStyle = {
    backgroundImage: `url(${hero_background})`,
  };
  return (
    <div className="hero" style={bgStyle}>
      <div className="container">
        <div className="hero_title">
          <h1>You got the travel plans, we got the travel vans.</h1>
          <p>
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
        </div>
        <div className="hero_bt">
          <Link to="/" className="btn">
            FIND YOUR VAN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
