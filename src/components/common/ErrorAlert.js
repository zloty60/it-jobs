import React from "react";
import Alert from "@material-ui/lab/Alert";

export default function ErrorAlert({txt}) {
  return (
    <Alert severity="error" role="error alert">
      {txt}
    </Alert>
  );
}
