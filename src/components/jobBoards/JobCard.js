import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Avatar,
  Typography,
  Chip,
  Box,
  CardActions,
  Button,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import DeleteAlert from "./../jobOffer/DeleteAlert";
import BusinessIcon from "@material-ui/icons/Business";
import routing from "./../../data/routing";

export default function JobCard({ jobOffer, manageCard }) {
  const {
    id,
    company,
    city,
    salary,
    jobTitle,
    experienceLevel,
    category,
  } = jobOffer;

  const classes = useStyles();
  const [openDeleteAlert, setOpenDeleteAlert] = useState(false);

  return (
    <Card className={manageCard ? null : classes.fullHeight}>
      <CardActionArea
        component={RouterLink}
        to={routing.offer.dynamicPath(id)}
        className={manageCard ? null : classes.fullHeight}
      >
        <CardContent>
          <Avatar alt="company logo" className={classes.avatar}>
            <BusinessIcon />
          </Avatar>
          <Typography component="h2" variant="h6" gutterBottom  className={classes.txtCapitalize}>
            {jobTitle}
          </Typography>
          <Typography gutterBottom className={`${classes.jobTitle} ${classes.txtCapitalize}`}>
            {company}
          </Typography>
          <Typography gutterBottom color="textPrimary">
            {salary.toLocaleString('pl-PL')} PLN
          </Typography>
          <Typography gutterBottom color="textSecondary" className={classes.txtCapitalize}>
            {city}
          </Typography>
          <Chip
            color="primary"
            variant="outlined"
            className={classes.experienceLabel}
            label={experienceLevel}
          />
          <Chip
            color="primary"
            variant="outlined"
            label={category}
            className={classes.categoryLabel}
          />
        </CardContent>
      </CardActionArea>
      {manageCard && (
        <CardActions>
          <Button
            size="small"
            color="secondary"
            variant="outlined"
            onClick={() => setOpenDeleteAlert(true)}
          >
            usuń
          </Button>
          <Box marginRight={1} />
          <Button
            component={RouterLink}
            to={routing.edit.dynamicPath(id)}
            size="small"
            color="primary"
            variant="outlined"
          >
            edytuj
          </Button>
          <DeleteAlert
            openDeleteAlert={openDeleteAlert}
            setOpenDeleteAlert={setOpenDeleteAlert}
            jobTitle={jobOffer.jobTitle}
            id={id}
          />
        </CardActions>
      )}
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  experienceLabel: {
    position: "absolute",
    top: "20px",
    right: "16px",
  },
  categoryLabel: {
    position: "absolute",
    bottom: "20px",
    right: "16px",
  },
  jobTitle: {
    color: "#2D2FCF",
    fontWeight: "bold",
  },
  avatar: {
    marginBottom: theme.spacing(2),
  },
  fullHeight: {
    height: "100%",
  },
  txtCapitalize: {
    textTransform:"capitalize"
  }
}));
