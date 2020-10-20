import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { googleLogin } from "./../../firebase/services/firebaseService";
import { showNotification } from "./../../redux/actions/notificationsActions"

export default function GoogleButton() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();


  const handleLogin = async () => {
    await googleLogin();
    dispatch(showNotification("pomyślnie zalogowano")); 
    history.push("/");
  };

  return (
    <Button
      fullWidth
      variant="contained"
      size="large"
      className={classes.googleBtn}
      onClick={handleLogin}
    >
      zaloguj z Google
    </Button>
  );
}

const useStyles = makeStyles((theme) => ({
  googleBtn: {
    backgroundColor: () => "#d32f2f",
    "&:hover": {
      backgroundColor: "#b71c1c",
    },
    color: "#fff",
  },
}));
