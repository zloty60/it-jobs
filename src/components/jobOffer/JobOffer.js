import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Card, CardContent, Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import OfferHeader from "./OfferHeader";
import OfferInfo from "./OfferInfo";
import OfferDescription from "./OfferDescription";
import DeleteAlert from "./DeleteAlert";
import AppContainer from "./../common/AppContainer";
import useCheckIsCreatedByUser from "./../../hooks/useCheckIsCreatedByUser";

export default function DetailedOfferView({jobOffer,id}) {
    const [openDeleteAlert, setOpenDeleteAlert] = useState(false);
    const isJobOfferCreatedByUser = useCheckIsCreatedByUser()

  return (
    <AppContainer maxWidth="md">
      <Card>
        <CardContent>
          <Box
            marginBottom={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <OfferHeader jobOffer={jobOffer} />
          </Box>
          <Box marginBottom={4}>
            <OfferInfo jobOffer={jobOffer} />
          </Box>
          <Box marginBottom={4}>
            <OfferDescription jobDescription={jobOffer.jobDescription} />
          </Box>
          {isJobOfferCreatedByUser && (
            <>
              <Button
                color="secondary"
                variant="contained"
                onClick={() => setOpenDeleteAlert(true)}
                startIcon={<DeleteIcon />}
                style={{ marginRight: "20px" }}
              >
                usuń
              </Button>
              <Button
                component={RouterLink}
                to={`/edytuj/${id}`}
                variant="contained"
                color="inherit"
              >
                edytuj
              </Button>
            </>
          )}
        </CardContent>
      </Card>
      <DeleteAlert
        openDeleteAlert={openDeleteAlert}
        setOpenDeleteAlert={setOpenDeleteAlert}
        jobTitle={jobOffer.jobTitle}
        id={id}
      />
    </AppContainer>
  );
}
