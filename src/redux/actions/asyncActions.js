import { asyncActions } from "./../../data/actionTypesConstants";

export const asyncActionStart = () => {
  return {
    type: asyncActions.ASYNC_ACTION_START,
  };
};

export const asyncActionFinish = () => {
  return {
    type: asyncActions.ASYNC_ACTION_FINISH,
  };
};

export const asyncActionError = (error) => {
  return {
    type: asyncActions.ASYNC_ACTION_ERROR,
    payload: error,
  };
};

export function initializeApp() {
  return {
    type: asyncActions.APP_LOADED,
  };
}
