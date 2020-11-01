import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Hidden, Grid } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import useFirestoreCollection from "./../hooks/useFirestoreCollection";
import { listenToJobOffersFromFirestore } from "./../firebase/services/firestoreService";
import { listenToJobOffers } from "./../redux/actions/jobOffersActions";
import FilterJobsDesktop from "./../components/filterJobs/FilterJobsDesktop";
import JobCard from "./../components/jobBoards/JobCard";
import JobCardLoaderGenerator from "./../components/jobBoards/JobCardLoaderGenerator";
import AppContainer from "./../components/common/AppContainer";
import useSortQuery from "./../hooks/useSortQuery";
import useExperienceQuery from "./../hooks/useExperienceQuery";
import useCheckCategoryOptions from "./../hooks/useCheckCategoryOptions";
import FilterJobsMobile from "./../components/filterJobs/FilterJobsMobile";
import ErrorAlert from "./../components/common/ErrorAlert";

export default function RootView() {
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((state) => state.async);
  const { jobOffers } = useSelector((state) => state.jobOffers);
  const sortQuery = useSortQuery();
  const categoryValue = useCheckCategoryOptions();
  const experienceValue = useExperienceQuery();  

  useFirestoreCollection({   
    query: () => listenToJobOffersFromFirestore(categoryValue, sortQuery,experienceValue),
    data: (jobOffers) => dispatch(listenToJobOffers(jobOffers)),
    deps: [dispatch, categoryValue],
  });

  if(isError) {
    return <AppContainer>
      <ErrorAlert txt="coś poszło nie tak ;(" />
    </AppContainer>
  }

  return (
    <Box display="flex">
      <Hidden smDown>
        <FilterJobsDesktop categoryValue={categoryValue} />
      </Hidden>
      <Box flexGrow={1}>
        <AppContainer>
          <Hidden mdUp>
            <Box marginBottom={4}>
              <FilterJobsMobile categoryValue={categoryValue} />
            </Box>
          </Hidden>
          {isLoading ? (
            <Grid component={"ul"} container spacing={4}>
              <JobCardLoaderGenerator n={6} />
            </Grid>
          ) : (
            <Grid component={"ul"} container spacing={4}>
              {jobOffers.length ? (
                jobOffers.map((jobOffer) => (
                  <Grid
                    key={jobOffer.id}
                    component={"li"}
                    item
                    xs={12}
                    sm={6}
                    lg={4}
                  >
                    <JobCard jobOffer={jobOffer} />
                  </Grid>
                ))
              ) : (
                <Grid item xs={12}>
                  <Alert severity="error">Brak ofert pracy!</Alert>
                </Grid>
              )}
            </Grid>
          )}
        </AppContainer>
      </Box>
    </Box>
  );
}
