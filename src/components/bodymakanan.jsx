import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: "auto",
    maxWidth: 370
  },
  papar: {
    padding: theme.spacing.unit * 2,
    margin: "auto",
    maxWidth: "95%"
  },
  image: {
    width: 158,
    height: 158
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
});

const makanans = [
  {
    id: 1,
    number: 0,
    nama: "Chicken Burger",
    gambar: "https://mcdonalds.co.id/uploads/FBQKSXVDfFEZ1spvoJ8C.png",
    harga: 20000
  },
  {
    id: 2,
    number: 0,
    nama: "Fish Bites",
    gambar: "https://mcdonalds.co.id/uploads/YqPxECDt8mMbZdhEHTyR.png",
    harga: 30000
  },
  {
    id: 3,
    number: 0,
    nama: "Rica Rica Fish",
    gambar: "https://mcdonalds.co.id/uploads/9cdwYDasl7THUqAuf8QA.png",
    harga: 15000
  },
  {
    id: 4,
    number: 0,
    nama: "Rica Rica Chicken",
    gambar: "https://mcdonalds.co.id/uploads/dFWcfffYS6z7aSNEQqi7.png",
    harga: 20000
  },
  {
    id: 5,
    number: 0,
    nama: "McFloat®",
    gambar: "https://mcdonalds.co.id/uploads/T78USfOte4tg9WCduIv0.png",
    harga: 10000
  },
  {
    id: 6,
    number: 0,
    nama: "Iced Lychee Tea",
    gambar: "https://mcdonalds.co.id/uploads/AzUj7AmluQfVJ3INRGuD.png",
    harga: 10000
  }
];

function ComplexGrid(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.papar}>
        <h2>Makanan Terpesan</h2>
      </Paper>
      <br />
      <Grid container spacing={24}>
        {makanans.map(makanan => (
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <Grid container spacing={16}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img
                      className={classes.img}
                      alt="complex"
                      src={makanan.gambar}
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm>
                  <Grid item xs direction="column" spacing={16}>
                    <Grid item xs={12} sm container>
                      <h3 align="center" style={{ marginLeft: "10px" }}>
                        {makanan.nama}
                      </h3>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <p align="center" style={{ marginLeft: "40px" }}>
                        Rp {makanan.harga}
                      </p>
                    </Grid>
                    <Grid item xs={12} sm container align="right">
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ backgroundColor: "red" }}
                        className={classes.button}
                        size="small"
                      >
                        -
                      </Button>
                      <h3 style={{ margin: "10px" }}> {makanan.number} </h3>
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ backgroundColor: "green" }}
                        className={classes.button}
                        size="small"
                      >
                        +
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

ComplexGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ComplexGrid);
