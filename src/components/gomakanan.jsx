import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  card: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 160,
    height: 140
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  playIcon: {
    height: 38,
    width: 38
  }
});

class Gomakanan extends Component {
  state = {
    qty: 0
  };

  tambah = (harga, id) => {
    this.setState({
      qty: this.state.qty + 1
    });
    const x = this.props.makanans.find(item => item.id === id);
    this.props.tambahTotalHarga(harga, x);
  };

  kurang = (harga, id) => {
    if (this.state.qty === 0) {
      return;
    }
    this.setState({
      qty: this.state.qty - 1
    });
    const x = this.props.makanans.find(item => item.id === id);
    this.props.kurangTotalHarga(harga, x);
  };
  render() {
    const { gambar, nama, harga, id } = this.props.itemmakanan;
    const { classes, theme } = this.props;

    return (
      <Card className={classes.card} style={{ margin: 10 }}>
        <CardMedia
          className={classes.cover}
          image={gambar}
          title="Live from space album cover"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {nama}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Rp {harga}
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <Button
              onClick={() => this.kurang(harga, id)}
              variant="contained"
              color="primary"
              style={{ backgroundColor: "red" }}
              className={classes.button}
              size="small"
            >
              -
            </Button>
            <h3 style={{ margin: "10px" }}>{this.state.qty}</h3>
            <Button
              onClick={() => this.tambah(harga, id)}
              variant="contained"
              color="primary"
              style={{ backgroundColor: "green" }}
              className={classes.button}
              size="small"
            >
              +
            </Button>
          </div>
        </div>
      </Card>
    );
  }
}
Gomakanan.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Gomakanan);
