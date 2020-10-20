import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardContent, Box, Button, Grid } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import DescriptionIcon from "@material-ui/icons/Description";
import { Link as RouterLink } from "react-router-dom";

import AppContainer from "./../components/common/AppContainer";
import FormHeader from "./../components/forms/FormHeader";
import useFirestoreCollection from "./../hooks/useFirestoreCollection";
import { listenToCreatedByUserJobOffersFromFirestore } from "./../firebase/services/firestoreService";
import { listenToCreatedByUserJobOffers } from "./../redux/actions/userProfileActions";
import JobCardLoaderGenerator from "./../components/jobBoards/JobCardLoaderGenerator";
import JobCard from "./../components/jobBoards/JobCard";

export default function UserJobOffers() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.async);
  const { userJobOffers } = useSelector((state) => state.userProfile);

  useFirestoreCollection({
    query: () => listenToCreatedByUserJobOffersFromFirestore(),
    data: (jobOffers) => dispatch(listenToCreatedByUserJobOffers(jobOffers)),
    deps: [dispatch],
  });

  return (
    <AppContainer maxWidth="lg">
      <Card>
        <CardContent>
          <FormHeader txt="Dodane ogłoszenia" icon={<DescriptionIcon />} />
          <Box marginTop={3}>
            {isLoading ? (
              <Grid component={"ul"} container spacing={4}>
                <JobCardLoaderGenerator n={3} />
              </Grid>
            ) : (
              <>
                {userJobOffers.length > 0 ? (
                  <Grid component={"ul"} container spacing={4}>
                    {userJobOffers.map((jobOffer) => (
                      <Grid
                        key={jobOffer.id}
                        component={"li"}
                        item
                        xs={12}
                        sm={6}
                        lg={4}
                      >
                        <JobCard jobOffer={jobOffer} manageCard={true} />
                      </Grid>
                    ))}
                  </Grid>
                ) : (
                  <Alert
                    severity="info"
                    action={
                      <Button
                        component={RouterLink}
                        to="/dodaj"
                        variant="outlined"
                        color="primary"
                      >
                        dodaj
                      </Button>
                    }
                  >
                    Nie dodałeś jeszcze żadnych ofert pracy
                  </Alert>
                )}
              </>
            )}
          </Box>
        </CardContent>
      </Card>
    </AppContainer>
  );
}
