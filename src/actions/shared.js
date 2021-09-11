import { _getUsers } from "../_DATA";
import { receiveAllUsers } from "./users";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export function handleReceivingData() {
  return (dispatch) => {
    dispatch(showLoading());
    return _getUsers().then((users) => {
      dispatch(receiveAllUsers(users));
      dispatch(hideLoading());
    });
  };
}
