import React from "react";
import { Card, CardContent, Box } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

export default function JobOfferFormLoader() {
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
          <Skeleton variant="circle" width={40} height={40} />
          <Box marginTop={2} />
          <Skeleton variant="text" width="35%" />
          <Box marginTop={4} />
          <Skeleton width="100%" height="56px" />
          <Skeleton width="100%" height="56px" />
          <Skeleton width="100%" height="56px" />
          <Skeleton width="100%" height="56px" />
          <Skeleton width="100%" height="56px" />
          <Skeleton width="100%" height="56px" />
          <Skeleton width="100%" height="56px" />
        </Box>
      </CardContent>
    </Card>
  );
}
