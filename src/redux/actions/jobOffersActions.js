import { jobOffersActions } from "./../../data/actionTypesConstants";

export function listenToJobOffers(jobOffers) {
  return {
    type: jobOffersActions.FETCH_JOB_OFFERS,
    payload: jobOffers,
  };
}

export function createJobOffer(jobOffer) {
  return {
    type: jobOffersActions.CREATE_JOB_OFFER,
    payload: jobOffer,
  };
}

export function updateJobOffer(jobOffer) {
  return {
    type: jobOffersActions.UPDATE_JOB_OFFER,
    payload: jobOffer,
  };
}

export function deleteJobOffer(jobOfferId) {
  return {
    type: jobOffersActions.DELETE_JOB_OFFER,
    payload: jobOfferId,
  };
}


