import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

export default function AppContainer(props) {
  const classes = useStyles(props);

  return (
    <Container
      maxWidth={props.maxWidth ? props.maxWidth : "lg"}
      className={classes.container}
    >
      {props.children}
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: (props) =>
      props.bigMargin ? theme.spacing(10) : theme.spacing(6),
    marginBottom: (props) =>
      props.bigMargin ? theme.spacing(10) : theme.spacing(6),
  },
}));
