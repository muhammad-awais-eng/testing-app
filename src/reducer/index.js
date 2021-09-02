import counterReducer from "./Counter";
import loggedReducer from "./IsLogged";

import { combineReducers } from "redux";
const allReducer = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});

export default allReducer;
