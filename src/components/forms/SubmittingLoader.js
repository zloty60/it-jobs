import React from "react";
import { Box, LinearProgress } from "@material-ui/core";

export default function SubmittingLoader() {
  return (
    <Box mt={2} mb={2}>
      <LinearProgress />
    </Box>
  );
}
