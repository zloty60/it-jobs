import React from "react";
import { Button } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import routing from "./../../data/routing";

export default function SignedOutMenu() {
  const classes = useStyles();
  return (
    <>
      <Button
        component={RouterLink}
        to={routing.login.path}
        variant="contained"
        color="primary"
        className={classes.btn}
      >
        Logowanie
      </Button>
      <Button
        component={RouterLink}
        to={routing.register.path}
        variant="contained"
        color="primary"
        className={classes.btn}
      >
        Rejestracja
      </Button>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  btn: {
    marginLeft: "20px",
  },
}));
