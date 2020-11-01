import React, { useState } from "react";
import { Grid, Button, Card, CardContent } from "@material-ui/core";

import CategoryModal from "./CategoryModal";
import SortOptions from "./SortOptions";
import ExperienceOptions from "./ExperienceOptions";

export default function FilterJobsMobile({ categoryValue }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card>
      <CardContent>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={6}>
            <SortOptions />
          </Grid>
          <Grid item xs={6}>
            <ExperienceOptions />
          </Grid>
          <Grid item xs={12}>
            <Button
              color="primary"
              fullWidth
              variant="contained"
              onClick={() => setIsOpen(true)}
            >
              kategorie
            </Button>
            <CategoryModal
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              categoryValue={categoryValue}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
