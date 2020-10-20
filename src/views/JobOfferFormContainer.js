import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { listenToJobOffers } from "./../redux/actions/jobOffersActions";
import useFirestoreDoc from "./../hooks/useFirestoreDoc";
import {
  listenToJobOfferFromFirestore
} from "../firebase/services/firestoreService";
import JobOfferForm from "./../components/jobOfferForm/JobOfferForm";
import JobOfferFormLoader from "./../components/jobOfferForm/JobOfferFormLoader";
import ErrorAlert from "./../components/common/ErrorAlert";
import AppContainer from "./../components/common/AppContainer";
import useCheckIsCreatedByUser from "./../hooks/useCheckIsCreatedByUser";


export default function JobOfferFormContainer(props) {
  const dispatch = useDispatch();
  const offerId = props.match.params.id;
  const selectedJobOffer = useSelector((state) =>
    state.jobOffers.jobOffers.find((el) => el.id === offerId)
  );
  const { isLoading, isError } = useSelector((state) => state.async);
  const isJobOfferCreatedByUser = useCheckIsCreatedByUser();

  useFirestoreDoc({
    shouldExecute: !!offerId,
    query: () => listenToJobOfferFromFirestore(offerId),
    data: (jobOffer) => dispatch(listenToJobOffers([jobOffer])),
    deps: [offerId, dispatch],
  });

  if (isLoading) {
    return (
      <AppContainer maxWidth="md">
        <JobOfferFormLoader />
      </AppContainer>
    );
  }

  if (isError) {
    return (
      <AppContainer maxWidth="md">
        <ErrorAlert  txt="Oferta nie istnieje" />
      </AppContainer>
    );
  }

  if(!isJobOfferCreatedByUser && selectedJobOffer ) {
    return (
      <AppContainer maxWidth="md">
        <ErrorAlert txt="Brak uprawnień"/>
      </AppContainer>
    )
  }

  return (<JobOfferForm selectedJobOffer={selectedJobOffer}  offerId={offerId} />)
}