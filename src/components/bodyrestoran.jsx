import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import makanan from "../containers/Makanan/makanan";

const styles = {
  card: {
    maxWidth: 260
  },
  media: {
    height: 111
  }
};

const restorans = [
  {
    nama: "McDonald",
    gambar: "http://new.hargiyanto.com/wp-content/uploads/2016/10/modmcd.jpg"
  },
  {
    nama: "KFC",
    gambar:
      "https://infopeluangusaha.org/wp-content/uploads/2016/03/strategi-kfc.jpg"
  },
  {
    nama: "A & W",
    gambar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqT2bUXnQRnSl_nNGnJ2xcdkPIzmed_nGmBmdMddoUSvGAJNcijQ"
  },
  {
    nama: "Pizza Hut",
    gambar:
      "https://cdns.klimg.com/merdeka.com/i/w/news/2013/02/26/156704/670x335/cara-pizza-hut-hadapi-aturan-waralaba-restoran.jpg"
  }
];

function MediaCard(props) {
  const { classes } = props;
  return (
    <Grid container spacing={0} align="center">
      {restorans.map(restoran => (
        <Grid item xs={6} sm={3}>
          <Card className={classes.card} style={{ margin: 10 }}>
            <CardActionArea>
              <CardMedia className={classes.media} image={restoran.gambar} />
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" href="/makanan">
                {restoran.nama}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
