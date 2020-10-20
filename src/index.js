import React from "react";
import ReactDOM from "react-dom";
import "fontsource-roboto";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers/index";
import { Provider } from "react-redux";
import ScrollToTop from "./components/navbar/ScrollToTop";
import { BrowserRouter } from "react-router-dom";
import { verifyAuth } from "./redux/actions/authActions";


function configureStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

  store.dispatch(verifyAuth());
  return store;
}

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
