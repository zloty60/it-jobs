import { authActions } from "./../../data/actionTypesConstants";

const initialState = {
  authenticated: false,
  currentUser: null,
};

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case authActions.SIGN_IN_USER:
      return {
        ...state,
        authenticated: true,
        currentUser: {
          email: payload.email,
          displayName: payload.displayName,
          uid: payload.uid,
          providerId: payload.providerData[0].providerId,
        },
      };
    case authActions.SIGN_OUT_USER:
      return {
        ...state,
        authenticated: false,
        currentUser: null,
      };
    default:
      return state;
  }
}
