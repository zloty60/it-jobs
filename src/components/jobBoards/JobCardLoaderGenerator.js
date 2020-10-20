import React from "react";
import { Grid } from "@material-ui/core";
import JobCardLoader from "./JobCardLoader";

export default function JobCardLoaderGenerator({ n }) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(
      <Grid key={i} component={"li"} item xs={12} sm={6} lg={4}>
        <JobCardLoader />
      </Grid>
    );
  }

  return <>{arr}</>;
}
