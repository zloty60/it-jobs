import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import routing from "./../data/routing";

export function ProtectedRoute({ component: Component, ...rest }) {
  const { authenticated } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (authenticated) {
          return <Component {...props} />;
        } else {
          return <Redirect to={routing.login.path} />;
        }
      }}
    />
  );
}

export function NotLoggedRoute({ component: Component, ...rest }) {
  const { authenticated } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (authenticated) {
          return <Redirect to="/" />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
}
