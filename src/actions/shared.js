import { _getUsers, _getQuestions } from "../_DATA";
import { receiveAllUsers } from "./users";
import { getQuestions } from "./questions";
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

export function handleReceiveQuestions() {
  return (dispatch) => {
    dispatch(showLoading());
    return _getQuestions().then((questions) => {
      dispatch(getQuestions(questions));
      dispatch(hideLoading());
    });
  };
}
