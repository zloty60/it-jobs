import React from "react";
import { Card, CardContent, Box } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

export default function JobOfferLoader() {
  return (
    <Card>
      <CardContent>
        <Box
          marginBottom={4}
          marginTop={3}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Skeleton variant="circle" width={65} height={65} />
          <Box marginTop={2} />
          <Skeleton variant="text" width="30%" />
          <Box marginTop={2} />
          <Skeleton variant="text" width="25%" />
          <Box marginTop={2} />
          <Skeleton variant="text" width="20%" />
          <Box marginTop={4} />
          <Skeleton variant="rect" width="100%" height={95} />
          <Box marginTop={5} />
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="100%" />
        </Box>
      </CardContent>
    </Card>
  );
}
