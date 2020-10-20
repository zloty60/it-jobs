import React from "react";
import { Box } from "@material-ui/core";
import { useSelector } from "react-redux";

import AppContainer from "./../components/common/AppContainer";
import PasswordChange from "./../components/userProfile/PasswordChange";
import UserNameChange from "./../components/userProfile/UserNameChange";
import GooglePasswordChange from "./../components/userProfile/GooglePasswordChange";

export default function Account() {
  const { currentUser } = useSelector((state) => state.auth);

  return (
    <AppContainer maxWidth="md">
      {currentUser.providerId === "password" && <PasswordChange />}
      {currentUser.providerId === "google.com" &&  <GooglePasswordChange /> }
      <Box marginTop={4} />
      <UserNameChange />
    </AppContainer>
  );
}
