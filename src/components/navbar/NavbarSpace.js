import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}));

export default function NavbarSpace() {
  const classes = useStyles();
  return <div className={classes.offset} />;
}
