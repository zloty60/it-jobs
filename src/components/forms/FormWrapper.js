import React from "react";
import { Card, CardContent } from "@material-ui/core";

export default function FormWrapper(props) {
  return (
    <Card>
      <CardContent>{props.children}</CardContent>
    </Card>
  );
}
