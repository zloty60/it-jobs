import React from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";

import { signOutFirebase } from "./../../firebase/services/firebaseService";
import routing from "./../../data/routing";
import {showNotification } from "./../../redux/actions/notificationsActions";

export default function SignedInMenu() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const displayName = useSelector((state) => {
    if (state.userProfile.currentUserProfile) {
      return state.userProfile.currentUserProfile.displayName;
    } else {
      return "";
    }
  });

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  async function handleSignOut() {
    try {
      await signOutFirebase();
      dispatch(showNotification("pomyślnie wylogowano"))
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Button
        component={RouterLink}
        to={routing.add.path}
        variant="outlined"
        color="inherit"
      >
        Dodaj ogłoszenie
      </Button>

      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        startIcon={<AccountCircleIcon />}
        endIcon={<ArrowDropDownIcon />}
        onClick={handleClick}
        variant="contained"
        color="primary"
        className={classes.btn}
      >
        {displayName}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={handleClose}
          component={RouterLink}
          to={routing.userAccount.path}
        >
          Moje konto
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={RouterLink}
          to={routing.userOffers.path}
        >
          Moje ogłoszenia
        </MenuItem>
        <MenuItem onClick={handleSignOut}>Wyloguj</MenuItem>
      </Menu>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  btn: {
    marginLeft: "20px",
    maxWidth: "500px",
    overflow: "auto",
  },
}));
