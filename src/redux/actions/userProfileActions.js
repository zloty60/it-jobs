import { userProfileActions } from "./../../data/actionTypesConstants";

export function listenToCurrentUserProfile(profile) {
  return {
    type: userProfileActions.LISTEN_TO_CURRENT_USER_PROFILE,
    payload: profile,
  };
}

export function resetCurrentUserProfile() {
  return {
    type: userProfileActions.RESET_CURRENT_USER_PROFILE,
  };
}

export function listenToCreatedByUserJobOffers(jobOffers) {
  return {
    type: userProfileActions.LISTEN_TO_USER_JOB_OFFERS,
    payload: jobOffers,
  };
}
