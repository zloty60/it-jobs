import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Drawer,
  CardContent,
  Box,
  IconButton,
  MenuItem,
  Button,
  Divider,
  Typography,
  Avatar
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import PersonIcon from '@material-ui/icons/Person';

import { signOutFirebase } from "./../../firebase/services/firebaseService";
import AuthButton from "./../buttons/AuthButton";
import routing from "./../../data/routing";
import { showNotification } from "./../../redux/actions/notificationsActions"


const menuItems = [
  { txt: "Moje konto", path: routing.userAccount.path },
  { txt: "Moje ogłoszenia", path: routing.userOffers.path },
];

const authButtons = [
  {
    txt: "logowanie",
    path: routing.login.path,
  },
  {
    txt: "rejestracja",
    path: routing.register.path,
  },
];

export default function MobileMenu({
  authenticated,
  isOpenMobileMenu,
  setIsOpenMobileMenu,
}) {
  const classes = useStyles();
  const userName = useSelector((state) => {
    if (state.userProfile.currentUserProfile) {
      return state.userProfile.currentUserProfile.displayName;
    } else {
      return "";
    }
  });

  const dispatch = useDispatch();

  async function handleLogOut() {
    try {
        await signOutFirebase();
        setIsOpenMobileMenu(false)
        dispatch(showNotification("pomyślnie wylogowano"))
    } catch (error) {
      console.log(error);
    } 
  }

  return (
    <Drawer
      variant="temporary"
      open={isOpenMobileMenu}
      onClose={() => setIsOpenMobileMenu(false)}
      anchor="right"
      PaperProps={{ className: classes.drawer }}
    >
      <IconButton
        color="inherit"
        aria-label="close mobile menu"
        onClick={() => setIsOpenMobileMenu(false)}
        className={classes.closeButton}
      >
        <CloseIcon />
      </IconButton>
      <CardContent>
        <Box marginTop={8} />
        {authenticated ? (
          <>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Avatar alt="user logo" className={classes.avatar} >
              <PersonIcon fontSize="large" />
          </Avatar>
          <Box marginTop={1} />
        <Typography component="h2" variant="h6" >
            {userName}
          </Typography>
          <Box marginTop={2} />
        </Box>
        <Divider />
            <ul>
              {menuItems.map((item) => (
                <MenuItem
                  key={item.txt}
                  component={RouterLink}
                  to={item.path}
                  onClick={() => setIsOpenMobileMenu(false)}
                >
                  {item.txt}
                </MenuItem>
              ))}
              <MenuItem onClick={handleLogOut}>Wyloguj</MenuItem>
            </ul>
            <Button
              onClick={() => setIsOpenMobileMenu(false)}
              component={RouterLink}
              to="/dodaj"
              variant="contained"
              color="primary"
            >
              Dodaj ogłoszenie
            </Button>
          </>
        ) : (
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            className={classes.box}
          >
            {authButtons.map((btn) => (
              <AuthButton
                key={btn.txt}
                txt={btn.txt}
                link={btn.path}
                closeMenuFn={setIsOpenMobileMenu}
              />
            ))}
          </Box>
        )}
      </CardContent>
    </Drawer>
  );
}

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "300px",
    maxWidth: "100%",
  },
  closeButton: {
    position: "fixed",
    top: 5,
    right: 12,
  },
  box: {
    minHeight: "90px",
  },
  avatar: {
    width:"55px",
    height:"55px"
  }
}));
