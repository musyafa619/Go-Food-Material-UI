import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export default class Bodycheckout extends Component {
  componentDidMount() {
    var x = sessionStorage.total;
    document.getElementById("totalHarga").innerHTML = x;
  }

  alhamdulilah = () => {
    if (sessionStorage.total > 0) {
      onclick = alert("Terima Kasihh");
      onclick = sessionStorage.total = 0;
    } else {
      onclick = alert("dipilih dulu dong, makanan nya");
      onclick = sessionStorage.total = 0;
    }
  };

  render() {
    return (
      <div align="center">
        <img
          style={{ maxWidth: 300 }}
          src="https://store.pesonaedu.id/media/imgs/troli.png"
        />
        <h2>Makanan Terpesan</h2>

        <h3>Total Pembayaran</h3>
        <h3 id="totalHarga" />
        <br />
        <Button
          onClick={this.alhamdulilah}
          variant="contained"
          color="primary"
          style={{ backgroundColor: "green" }}
          href="."
        >
          Bayar
        </Button>
      </div>
    );
  }
}
