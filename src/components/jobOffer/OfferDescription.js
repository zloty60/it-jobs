import React from "react";
import { Typography } from "@material-ui/core";

export default function OfferDescription({ jobDescription }) {
  return (
    <>
      <Typography component="h2" variant="h6" gutterBottom>
        Opis pracy
      </Typography>
      <Typography variant="body1" gutterBottom>
        {jobDescription}
      </Typography>
    </>
  );
}
