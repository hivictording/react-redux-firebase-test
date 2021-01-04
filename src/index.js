import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { getFirebase, ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./App";
import "./index.css";
import firebase from "./config/firebaseConfig";

import rootReducer from "./reduxstore/rootReducer";

const middleware = [thunk.withExtraArgument(getFirebase)];
const reduxStore = createStore(rootReducer, applyMiddleware([...middleware]));

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
  <Provider store={reduxStore}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
