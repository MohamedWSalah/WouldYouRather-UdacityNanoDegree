import { combineReducers } from "redux";

import users from "./usersReducer";
import loggedUser from "./loggedUserReducer";
import { loadingBarReducer } from "react-redux-loading-bar";

export default combineReducers({
  users,
  loggedUser,
  loadingBar: loadingBarReducer,
});
