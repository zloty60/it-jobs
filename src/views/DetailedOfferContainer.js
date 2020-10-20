import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Box,Link } from "@material-ui/core";

import useFirestoreDoc from "../hooks/useFirestoreDoc";
import { listenToJobOfferFromFirestore } from "./../firebase/services/firestoreService";
import { listenToJobOffers } from "../redux/actions/jobOffersActions";
import JobOffer from "./../components/jobOffer/JobOffer";
import JobOfferLoader from "./../components/jobOffer/JobOfferLoader";
import ErrorAlert from "./../components/common/ErrorAlert";
import AppContainer from "./../components/common/AppContainer";

export default function DetailedOfferContainer(props) {
  const id = props.match.params.id;
  const dispatch = useDispatch();
  const jobOffer = useSelector((state) =>
    state.jobOffers.jobOffers.find((el) => el.id === id)
  );
  const { isLoading, isError } = useSelector((state) => state.async);

  useFirestoreDoc({
    query: () => listenToJobOfferFromFirestore(id),
    data: (jobOffer) => dispatch(listenToJobOffers([jobOffer])), 
    deps: [props.match.params.id, dispatch],
  });

  if (isLoading || (!jobOffer && !isError))
    return (
      <AppContainer maxWidth="md">
        <JobOfferLoader />
      </AppContainer>
    );

  if (isError)
    return (
      <AppContainer maxWidth="md">
        <ErrorAlert txt="Oferta nie istnieje" />
        <Box marginTop={2}>
        <Link variant="body2" component={RouterLink} to="/">
        Przejdź do strony z ogłoszeniami
        </Link>
        </Box>
      </AppContainer>
    );

  return (
    <JobOffer  jobOffer={jobOffer} id={id} />
  );
}
