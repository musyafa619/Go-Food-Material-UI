import React, { Component } from "react";
import Navbar from "../../components/navbar";
import Paper from "../../components/paper";
import Judul from "../../components/judul";
import Bodyhome from "../../components/bodyhome";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <br />
        <Paper />
        <br />
        <Judul />
        <br />
        <Bodyhome />
      </div>
    );
  }
}
