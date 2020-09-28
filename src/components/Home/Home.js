import React from "react";
import './Home.css';
import image from "./pl-hero.jpg";


function Home() {
  return (
    <div>
      <div className="div-image">
        <h1>Discover flowers around you</h1>
        <h4>Explore between more than 8.427 sightings</h4>
        <input/>
      </div>
      <div>
        <div className="div-cell"></div>
        <div className="div-cell"></div>
        <div className="div-cell"></div>
        <div className="div-cell"></div>
        <div className="div-cell"></div>
        <div className="div-cell"></div>
        <div className="div-cell"></div>
        <div className="div-cell"></div>
      </div>
    </div>
  );
}

export default Home;
