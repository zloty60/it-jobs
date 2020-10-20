import React from "react";
import { Button } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

export default function AuthButton({ txt, link, closeMenuFn }) {
  return (
    <Button
      component={RouterLink}
      to={link}
      variant="contained"
      color="primary"
      onClick={() => closeMenuFn(false)}
    >
      {txt}
    </Button>
  );
}
