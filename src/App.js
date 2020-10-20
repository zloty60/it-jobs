import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Backdrop, CircularProgress} from "@material-ui/core";

import DetailedOfferContainer from "./views/DetailedOfferContainer";
import RootView from "./views/RootView";
import NoMatch from "./views/NoMatch";
import Navbar from "./components/navbar/Navbar";
import NavbarSpace from "./components/navbar/NavbarSpace";
import JobOfferFormContainer from "./views/JobOfferFormContainer";
import Login from "./views/Login";
import Register from "./views/Register";
import Account from "./views/Account";
import UserJobOffers from "./views/UserJobOffers";
import EmptyNavbar from "./components/navbar/EmptyNavbar";
import routing from "./data/routing";
import { ProtectedRoute, NotLoggedRoute } from "./helpers/routes";
import SuccessNotification from "./components/common/SuccessNotification";


function App() {
  const { key } = useLocation();
  const { initialized } = useSelector((state) => state.async);

  if (!initialized)
    return (
      <Backdrop open={true} invisible>
        <EmptyNavbar />
        <CircularProgress />
      </Backdrop>
    );

  return (
    <>
      <Navbar />
      <NavbarSpace />
      <SuccessNotification />  
      <Switch>
        <Route
          exact
          path={["/", routing.category.path]}
          component={RootView}
          key={key}
        />
        <Route path={routing.offer.path} component={DetailedOfferContainer} />
        <NotLoggedRoute path={routing.login.path} component={Login} />
        <NotLoggedRoute path={routing.register.path} component={Register} />
        <ProtectedRoute
          path={[routing.add.path, routing.edit.path]}
          component={JobOfferFormContainer}
          key={key}
        />
        <ProtectedRoute path={routing.userAccount.path} component={Account} />
        <ProtectedRoute
          path={routing.userOffers.path}
          component={UserJobOffers}
        />
        <Route path="*" component={NoMatch} />
      </Switch>
    </>
  );
}

export default App;