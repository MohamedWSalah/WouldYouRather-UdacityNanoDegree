import { RECEIVE_ALL_USERS } from "../actions/users";
import { SUBMIT_QUESTION_ANSWER, ADD_NEW_QUESTION } from "../actions/questions";

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
    case ADD_NEW_QUESTION:
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat([
            action.question.id,
          ]),
        },
      };
    default:
      return state;
  }
}
