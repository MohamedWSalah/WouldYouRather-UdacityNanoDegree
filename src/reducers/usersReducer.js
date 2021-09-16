import { RECEIVE_ALL_USERS } from "../actions/users";
import { SUBMIT_QUESTION_ANSWER } from "../actions/questions";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return {
        ...state,
        ...action.users,
      };

    case SUBMIT_QUESTION_ANSWER:
      const { loggedUser, qid, answer } = action.info;

      return {
        ...state,
        [loggedUser]: {
          ...state[loggedUser],
          answers: {
            ...state[loggedUser].answers,
            [qid]: answer,
          },
        },
      };

    default:
      return state;
  }
}
