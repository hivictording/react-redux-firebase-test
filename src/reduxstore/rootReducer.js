import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

import testReducer from "./testReducer";

export default combineReducers({
  test: testReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});
