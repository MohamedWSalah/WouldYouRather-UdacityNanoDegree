import { combineReducers } from "redux";

import users from "./usersReducer";
import loggedUser from "./loggedUserReducer";
import { loadingBarReducer } from "react-redux-loading-bar";
import questions from "./questionsReducer";
export default combineReducers({
  users,
  loggedUser,
  questions,
  loadingBar: loadingBarReducer,
});
