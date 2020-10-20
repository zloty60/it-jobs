import React from "react";
import { Box, Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function FormHeader({ icon, txt }) {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Avatar className={classes.avatar}>{icon}</Avatar>
      <Typography component="h1" variant="h5">
        {txt}
      </Typography>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
  },
}));
