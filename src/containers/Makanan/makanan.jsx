import React, { Component } from "react";
import Navbarrestoran from "../../components/navbarrestoran";
import Bodymakanan from "../../components/bodymakanan";

export default class makanan extends Component {
  render() {
    return (
      <div align="center">
        <Navbarrestoran />
        <br />
        <Bodymakanan />
      </div>
    );
  }
}
