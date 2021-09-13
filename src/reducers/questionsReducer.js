import { RECEIVE_ALL_QUESTIONS } from "../actions/questions";

export default function questions(state = "", action) {
  switch (action.type) {
    case RECEIVE_ALL_QUESTIONS:
      return action.questions;
    default:
      return state;
  }
}
