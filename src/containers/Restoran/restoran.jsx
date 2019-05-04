import React, { Component } from "react";
import Navbarrestoran from "../../components/navbarrestoran";
import Paperrestoran from "../../components/paperrestoran";
import Judulrestoran from "../../components/judulrestoran";
import Bodyrestoran from "../../components/bodyrestoran";

export default class Restoran extends Component {
  render() {
    return (
      <div align="center">
        <Navbarrestoran />
        <br />
        <Paperrestoran />
        <Judulrestoran />
        <br />
        <Bodyrestoran />
      </div>
    );
  }
}
