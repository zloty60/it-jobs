import firebase from "./../../firebase/config/firebase";
import { initializeApp } from "./asyncActions";
import {
  listenToCurrentUserProfile,
  resetCurrentUserProfile,
} from "./userProfileActions";
import {
  getUserProfileFromFirestore,
  dataFromSnapshot,
} from "./../../firebase/services/firestoreService";
import { authActions } from "./../../data/actionTypesConstants";

export function signInUser(user) {
  return {
    type: authActions.SIGN_IN_USER,
    payload: user,
  };
}

export function verifyAuth() {
  return function (dispatch) {
    return firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(signInUser(user));
        const userFromFirestore = getUserProfileFromFirestore(user.uid);
          userFromFirestore.onSnapshot((snapshot) => {
          dispatch(listenToCurrentUserProfile(dataFromSnapshot(snapshot)));
          dispatch(initializeApp());
        });
      } else {
        dispatch(signOutUser());
        dispatch(resetCurrentUserProfile());
        dispatch(initializeApp());
      }
    });
  };
}

export function signOutUser() {
  return {
    type: authActions.SIGN_OUT_USER,
  };
}
