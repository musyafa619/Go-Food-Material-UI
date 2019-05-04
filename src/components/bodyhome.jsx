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

const styles = {
  card: {
    maxWidth: 230
  },
  media: {
    height: 150
  }
};

const apps = [
  {
    gambar:
      "https://www.kampungdesigner.com/wp-content/uploads/edd/2018/08/Logo-Go-Food-Vector.png"
  },
  {
    gambar:
      "https://pbs.twimg.com/profile_images/639279359497367552/vZZuFX6W.jpg"
  },
  {
    gambar:
      "https://obs.line-scdn.net/0htqg8Hg_JK15aQQdf8dRUCWAXKDFpLThdPnd6QAovdWondmtYYXVkOnsWfTtycGwAMyZkOnlAMG9xIW9aM3Rn"
  },
  {
    gambar: "https://ciptadrasoft.com/wp-content/uploads/2017/05/logo-gojek.jpg"
  }
];

function MediaCard(props) {
  const { classes } = props;
  return (
    <Grid container spacing={0} align="center">
      {apps.map(app => (
        <Grid item xs={6} sm={3}>
          <Card className={classes.card} style={{ margin: 10 }}>
            <CardActionArea>
              <CardMedia className={classes.media} image={app.gambar} />
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" href="/restoran">
                Order
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
