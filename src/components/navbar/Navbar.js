import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Box,
  Hidden,
  IconButton,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
import MenuIcon from "@material-ui/icons/Menu";

import SignedOutMenu from "./SignedOutMenu";
import SignedInMenu from "./SignedInMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const classes = useStyles();
  const { authenticated } = useSelector((state) => state.auth);

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Container>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Button component={RouterLink} to="/" color="inherit">
              IT jobs
            </Button>
            <Hidden mdUp>
              <IconButton
                onClick={() => setIsOpenMobileMenu(true)}
                color="inherit"
                aria-label="menu-mobile"
                edge="end"
              >
                <MenuIcon />
              </IconButton>
              <MobileMenu
                isOpenMobileMenu={isOpenMobileMenu}
                setIsOpenMobileMenu={setIsOpenMobileMenu}
                authenticated={authenticated}
              />
            </Hidden>
            <Hidden smDown>
              <Box mr="auto" />
              {authenticated ? <SignedInMenu /> : <SignedOutMenu />}
            </Hidden>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));
