import { jobOffersActions } from "./../../data/actionTypesConstants";

const initialState = {
  jobOffers: []
};

const jobOffersReducer = (state = initialState, action) => {
  switch (action.type) {
    case jobOffersActions.FETCH_JOB_OFFERS:
      return {
        ...state,
        jobOffers: [...action.payload],
      };
    case jobOffersActions.CREATE_JOB_OFFER:
      return {
        ...state,
        jobOffers: [...state.jobOffers, action.payload],
      };
    case jobOffersActions.DELETE_JOB_OFFER:
      return {
        ...state,
        jobOffers: [
          ...state.jobOffers.filter(
            (jobOffer) => jobOffer.id !== action.payload
          ),
        ],
      };
    case jobOffersActions.UPDATE_JOB_OFFER:
      return {
        ...state,
        jobOffers: [
          ...state.jobOffers.filter(
            (jobOffer) => jobOffer.id !== action.payload.id
          ),
          action.payload,
        ],
      };
    case jobOffersActions.GET_LAST_JOB_OFFER:
      return {
        ...state,
        lastjobOffer:action.payload
      }  
    default:
      return state;
  }
};

export default jobOffersReducer;
