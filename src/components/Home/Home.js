import React, { useState, useEffect } from "react";
import './Home.css';
import image from "./pl-hero.jpg";


function Home() {
  const [flowers, setFlowers] = useState({});

  async function fetchData() {
    const res = await fetch("https://flowrspot-api.herokuapp.com/api/v1/flowers");
    res
    .json()
    .then(res => setFlowers(res));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="div-image">
        <h1>Discover flowers around you</h1>
        <h4>Explore between more than 8.427 sightings</h4>
        <input/>
      </div>
      <div>
      {JSON.stringify(flowers)}
      </div>
    </div>
  );
}

export default Home;
