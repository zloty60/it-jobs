import { asyncActions } from "./../../data/actionTypesConstants";

const initialState = {
  isLoading: false,
  isError: false,
  error: null,
  initialized: false,
};

const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case asyncActions.ASYNC_ACTION_START: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: null,
      };
    }
    case asyncActions.ASYNC_ACTION_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
      };
    case asyncActions.ASYNC_ACTION_FINISH:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case asyncActions.APP_LOADED:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export default asyncReducer;
