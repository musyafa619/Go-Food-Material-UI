import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";
import Gomakanan from "./gomakanan";
import Gomakanan2 from "./gomakanan2";
import Gomakanan3 from "./gomakanan3";
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
});

class Bodymakannn extends Component {
  state = {
    daftar: [],
    makanans: [
      {
        id: 1,
        number: 0,
        nama: "Fish Fillet Burger",
        gambar: "https://mcdonalds.co.id/uploads/4B8SJHaTz72RZgxclHM3.png",
        harga: 20000
      },
      {
        id: 2,
        number: 0,
        nama: "Rica Rica Fish",
        gambar: "https://mcdonalds.co.id/uploads/9cdwYDasl7THUqAuf8QA.png",
        harga: 30000
      }
    ],
    makanans2: [
      {
        id: 3,
        number: 0,
        nama: "Bubur Ayam McD",
        gambar: "https://mcdonalds.co.id/uploads/ueZmO6jKSRZCzwWNOTHV.png",
        harga: 20000
      },
      {
        id: 4,
        number: 0,
        nama: "McFloat ®",
        gambar: "https://mcdonalds.co.id/uploads/T78USfOte4tg9WCduIv0.png",
        harga: 10000
      }
    ],
    makanans3: [
      {
        id: 5,
        number: 0,
        nama: "Iced Lychee Tea",
        gambar: "https://mcdonalds.co.id/uploads/AzUj7AmluQfVJ3INRGuD.png",
        harga: 10000
      },
      {
        id: 6,
        number: 0,
        nama: "Choco Sundae",
        gambar: "https://mcdonalds.co.id/uploads/TZQSXtqhC8g9jDntWw1U.png",
        harga: 15000
      }
    ],
    total: 0
  };

  tambahTotalHarga = (harga, item) => {
    this.setState({
      total: this.state.total + harga,
      daftar: this.state.daftar.concat(item)
    });
    sessionStorage.total = this.state.total + harga;
  };

  kurangTotalHarga = (harga, item) => {
    this.setState({
      total: this.state.total - harga,
      daftar: this.state.daftar.filter(l => l.id != item.id)
    });
    sessionStorage.total = this.state.total - harga;
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper className={classes.papar}>
          <br />
          <h2>Makanan Terpesan</h2>
          {this.state.daftar.map(item => (
            <h6>
              1x {item.nama} = {item.harga}
            </h6>
          ))}
          <h3>Rp {this.state.total}</h3>
          <br />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            style={{ backgroundColor: "green" }}
          >
            Check Out
          </Button>
          <br />
          <br />
        </Paper>
        <br />

        <Grid container spacing={24}>
          <Grid item xs={12} sm={4}>
            {this.state.makanans.map(itemmakanan => (
              <Gomakanan
                itemmakanan={itemmakanan}
                tambahTotalHarga={this.tambahTotalHarga}
                kurangTotalHarga={this.kurangTotalHarga}
                makanans={this.state.makanans}
                makanans2={this.state.makanans2}
                makanans3={this.state.makanans3}
              />
            ))}
          </Grid>
          <Grid item xs={12} sm={4}>
            {this.state.makanans2.map(itemmakanan2 => (
              <Gomakanan2
                itemmakanan2={itemmakanan2}
                tambahTotalHarga={this.tambahTotalHarga}
                kurangTotalHarga={this.kurangTotalHarga}
                makanans={this.state.makanans}
                makanans2={this.state.makanans2}
                makanans3={this.state.makanans3}
              />
            ))}
          </Grid>
          <Grid item xs={12} sm={4}>
            {this.state.makanans3.map(itemmakanan3 => (
              <Gomakanan3
                itemmakanan3={itemmakanan3}
                tambahTotalHarga={this.tambahTotalHarga}
                kurangTotalHarga={this.kurangTotalHarga}
                makanans={this.state.makanans}
                makanans2={this.state.makanans2}
                makanans3={this.state.makanans3}
              />
            ))}
          </Grid>
        </Grid>
      </div>
    );
  }
}
Bodymakannn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Bodymakannn);
