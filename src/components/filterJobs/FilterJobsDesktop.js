import React from "react";
import { Drawer, CardContent, Grid, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

import NavbarSpace from "./../navbar/NavbarSpace";
import SortOptions from "./SortOptions";
import { categoryOptions } from "./../../data/selectOptions";

export default function FilterJobsDesktop({ categoryValue }) {
  const classes = useStyles();

  return (
    <nav className={classes.drawer}>
      <Drawer
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="permanent"
        anchor="left"
      >
        <NavbarSpace />
        <div className={classes.marginTop}>
          <CardContent>
            <SortOptions />
            <Box marginBottom={4} />
            <Grid container spacing={3} justify="space-between">
              {categoryOptions.map((el) => (
                <Grid key={el.category} item xs={6}>
                  <Button
                    component={RouterLink}
                    fullWidth
                    variant={
                      el.category === categoryValue ? "contained" : "outlined"
                    }
                    color="primary"
                    to={el.url}
                  >
                    {el.displaTxt}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </div>
      </Drawer>
    </nav>
  );
}

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 300,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 300,
  },
  marginTop: {
    marginTop: theme.spacing(6),
  },
}));
