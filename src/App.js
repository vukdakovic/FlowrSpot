import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.js";
import Home from "./components/Home/Home.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
