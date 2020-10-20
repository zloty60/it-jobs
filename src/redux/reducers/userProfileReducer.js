import { userProfileActions } from "./../../data/actionTypesConstants";

const initialState = {
  currentUserProfile: null,
  userJobOffers: [],
};

export default function userProfileReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case userProfileActions.LISTEN_TO_CURRENT_USER_PROFILE:
      return {
        ...state,
        currentUserProfile: payload,
      };
    case userProfileActions.RESET_CURRENT_USER_PROFILE:
      return {
        ...state,
        currentUserProfile: null,
      };
    case userProfileActions.LISTEN_TO_USER_JOB_OFFERS:
      return {
        ...state,
        userJobOffers: payload,
      };
    default: {
      return state;
    }
  }
}
