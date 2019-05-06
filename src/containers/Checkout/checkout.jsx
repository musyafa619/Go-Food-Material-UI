import React, { Component } from "react";
import Bodycheckout from "./../../components/bodycheckout";
import Navbar from "../../components/navbarrestoran";
export default class checkout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Bodycheckout />
      </div>
    );
  }
}
