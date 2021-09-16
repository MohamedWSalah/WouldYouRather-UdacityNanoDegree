import {
  RECEIVE_ALL_QUESTIONS,
  SUBMIT_QUESTION_ANSWER,
} from "../actions/questions";

export default function questions(state = "", action) {
  switch (action.type) {
    case RECEIVE_ALL_QUESTIONS:
      return action.questions;
    case SUBMIT_QUESTION_ANSWER:
      const { loggedUser, qid, answer } = action.info;

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([loggedUser]),
          },
        },
      };
    default:
      return state;
  }
}
