import React from "react";
import './Home.css';
import image from "./pl-hero.jpg";


function Home() {
  const [flowers, setFlowers] = React.useState(null);

  fetch('https://flowrspot-api.herokuapp.com/api/v1/flowers').then(response => response.json()).then(data => setFlowers({ data });

  return (
    <div>
      <div className="div-image">
        <h1>Discover flowers around you</h1>
        <h4>Explore between more than 8.427 sightings</h4>
        <input/>
      </div>
      <div>
      {
        flowers.map((flower) =>
          <div className="div-cell"></div>
        );
      }
      </div>
    </div>
  );
}

export default Home;
