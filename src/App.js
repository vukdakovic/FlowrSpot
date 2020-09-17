import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.js";
import Home from "./components/Home/Home.js";
import Sightings from "./components/Sightings/Sightings.js";
import Flowers from "./components/Flowers/Flowers.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/flowers" exact component={() => <Flowers />} />
          <Route path="/sightings" exact component={() => <Sightings />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
