import React from "react";
import { Paper, CardContent, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function OfferInfo({
  jobOffer: { category, experienceLevel, city },
}) {
  const classes = useStyles();
  return (
    <Paper className={classes.papper} variant="outlined" square>
      <CardContent>
        <Grid container>
          <Grid item xs={12} md={3} className={classes.borderRight}>
            <Typography
              align="center"
              gutterBottom
              className={classes.property}
            >
              Doświadczenie
            </Typography>
            <Typography
              align="center"
              className={classes.value}
              variant="h6"
              gutterBottom
            >
              {experienceLevel}
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} className={classes.borderRight}>
            <Typography
              align="center"
              gutterBottom
              className={classes.property}
            >
              Lokalizacja
            </Typography>
            <Typography
              align="center"
              className={classes.value}
              variant="h6"
              gutterBottom
            >
              {city}
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} className={classes.borderRight}>
            <Typography
              align="center"
              gutterBottom
              className={classes.property}
            >
              Rodzaj umowy
            </Typography>
            <Typography
              align="center"
              className={classes.value}
              variant="h6"
              gutterBottom
            >
              UOP
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography
              align="center"
              gutterBottom
              className={classes.property}
            >
              Kategoria
            </Typography>
            <Typography align="center" className={classes.value} variant="h6">
              {category}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Paper>
  );
}

const useStyles = makeStyles((theme) => ({
  papper: {
    width: "100%",
  },
  property: {
    color: "#737373",
    textTransform: "capitalize",
    marginTop: theme.spacing(2),
  },
  value: {
    fontSize: "1rem",
    textTransform: "capitalize",
  },
  borderRight: {
    borderBottom: "1px solid #eeeeee",
    [theme.breakpoints.up("md")]: {
      borderBottom: "none",
      borderRight: "1px solid #eeeeee",
    },
  },
}));
