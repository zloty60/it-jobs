import React from "react";
import {
  Grid,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Typography,
  Container,
  Slide,
  Button,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Link as RouterLink } from "react-router-dom";

import { categoryOptions } from "./../../data/selectOptions";

export default function CategoryModal({ isOpen, setIsOpen, categoryValue }) {
  return (
    <Dialog
      fullScreen
      open={isOpen}
      TransitionComponent={Transition}
      onClose={() => setIsOpen(false)}
    >
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open mobile category modal"
            edge="start"
            onClick={() => setIsOpen(false)}
          >
            <CloseIcon />
          </IconButton>
          <Typography>Wybierz kategorię ogłoszenia</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container>
        <Box mt={2}>
          <Grid container spacing={3} justify="space-between">
            {categoryOptions.map((el) => (
              <Grid key={el.category} item xs={12} sm={6}>
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
        </Box>
      </Container>
    </Dialog>
  );
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
