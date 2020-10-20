import React from "react";
import { Typography, Card,CardContent } from "@material-ui/core";

import AppContainer from "../components/common/AppContainer";

export default function NoMatch() {
  return <AppContainer>
    <Card>
      <CardContent>
        <Typography variant="h1" align="center" gutterBottom>
          404
        </Typography>
        <Typography variant="h3" align="center" gutterBottom>
          Strony nie znaleziono!
        </Typography>
      </CardContent>
    </Card>
  </AppContainer>;
}
