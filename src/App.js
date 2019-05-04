import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Restoran from "./containers/Restoran";
import Makanan from "./containers/Makanan";

function App() {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/restoran" component={Restoran} />
      <Route path="/makanan" component={Makanan} />
    </div>
  );
}

export default App;
