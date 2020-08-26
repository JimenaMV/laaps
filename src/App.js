import React, { Fragment } from "react";
import "./styles.css";
import Home from './components/Principal/Home'
import RouterCarrusel from './components/Principal/RouterCarrusel'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/carrusel">
          <RouterCarrusel/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  ) 
}

export default App;
