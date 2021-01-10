import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { getFirebase, ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { ThemeProvider } from "@material-ui/core";

import theme from "./theme/Theme";
import App from "./App";
import "./index.css";
import firebase from "./config/firebaseConfig";

import rootReducer from "./reduxstore/rootReducer";

const middleware = [thunk.withExtraArgument(getFirebase)];
const reduxStore = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware))
);

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: reduxStore.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={reduxStore}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
