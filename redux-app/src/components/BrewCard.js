import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 275
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {props.item.name}
        </Typography>
        <Typography variant="h5" component="h2"></Typography>
        <Typography className={classes.pos} color="textSecondary">
          Location: {props.item.city}, {props.item.state}
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" size="small" href={props.item.website_url}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
