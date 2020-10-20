import React from "react";
import { Avatar, Typography } from "@material-ui/core";
import BusinessIcon from "@material-ui/icons/Business";
import { makeStyles } from "@material-ui/core/styles";

export default function OfferHeader({
  jobOffer: { company, jobTitle, salary },
}) {
  const classes = useStyles();
  return (
    <>
      <Avatar className={classes.avatar}>
        <BusinessIcon fontSize="large" />
      </Avatar>
      <Typography component="h2" variant="h5" gutterBottom  className={classes.txtCapitalize}>
        {jobTitle}
      </Typography>
      <Typography className={`${classes.company} ${classes.txtCapitalize}`} gutterBottom>
        {company}
      </Typography>
      <Typography className={classes.salary} gutterBottom color="textPrimary">
        {salary.toLocaleString('pl-PL')} PLN
      </Typography>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main,
    width: "65px",
    height: "65px",
  },
  company: {
    color: "#2D2FCF",
    fontWeight: "bold",
    fontSize: "1.35rem",
  },
  salary: {
    fontSize: "1.1rem",
  },
  txtCapitalize: {
    textTransform:"capitalize"
  }
}));
