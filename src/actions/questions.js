import { _saveQuestionAnswer, _saveQuestion } from "../_DATA";
import { showLoading, hideLoading } from "react-redux-loading-bar";
export const RECEIVE_ALL_QUESTIONS = "RECEIVE_ALL_QUESTIONS";
export const SUBMIT_QUESTION_ANSWER = "SUBMIT_QUESTION_ANSWER";
export const ADD_NEW_QUESTION = "ADD_NEW_QUESTION";

export function getQuestions(questions) {
  return {
    type: RECEIVE_ALL_QUESTIONS,
    questions,
  };
}

//Submit answer ======================
function answerQuestion({ loggedUser, qid, answer }) {
  return {
    type: SUBMIT_QUESTION_ANSWER,
    info: {
      loggedUser,
      qid,
      answer,
    },
  };
}

export function handleAnswerSubmit(qid, answer) {
  return (dispatch, getState) => {
    const { loggedUser } = getState();
    dispatch(showLoading());

    return _saveQuestionAnswer({
      authedUser: loggedUser,
      qid: qid,
      answer: answer,
    }).then(() => {
      dispatch(
        answerQuestion({ loggedUser: loggedUser, qid: qid, answer: answer })
      );
      dispatch(hideLoading());
    });
  };
}
//======================

//Add new question ======================
function addQuestion(question) {
  return {
    type: ADD_NEW_QUESTION,
    question,
  };
}

export function handleAddQuestion(optionOne, optionTwo) {
  return (dispatch, getState) => {
    const { loggedUser } = getState();
    dispatch(showLoading());
    const newQuestion = {
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: loggedUser,
    };
    return _saveQuestion(newQuestion).then((question) => {
      dispatch(addQuestion(question));
      dispatch(hideLoading());
    });
  };
}
