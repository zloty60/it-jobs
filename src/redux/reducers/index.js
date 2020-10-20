import { combineReducers } from "redux";
import jobOffersReducer from "./jobOffersReducer";
import asyncReducer from "./asyncReducer";
import authReducer from "./authReducer";
import userProfileReducer from "./userProfileReducer";
import notificationsReducer from "./notificationsReducer";

export default combineReducers({
  jobOffers: jobOffersReducer,
  async: asyncReducer,
  auth: authReducer,
  userProfile: userProfileReducer,
  notifications:notificationsReducer
});
