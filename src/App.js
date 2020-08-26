import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Geolocation from "./components/ClientProfile/Geolocation";
import Home from "./components/Principal/Home";
import CarruselWelcome from "./components/Principal/CarruselWelcome";
function App() {
  return (
    <Router>
      <div></div>
      <Switch>
        <Route path="/geolocation">
          <Geolocation />
        </Route>
        <Route path="/carrusel">
          <CarruselWelcome />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
