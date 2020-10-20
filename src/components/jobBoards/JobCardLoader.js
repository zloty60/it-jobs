import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { Card, CardContent } from "@material-ui/core";

export default function JobCardLoader() {
  return (
    <Card>
      <CardContent>
        <Skeleton variant="circle" width={40} height={40} />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </CardContent>
    </Card>
  );
}
