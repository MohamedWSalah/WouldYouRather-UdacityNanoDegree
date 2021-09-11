export const SET_LOGGED_USER = "SET_LOGGED_USER";

export function setLoggedUser(loggedUser) {
  return {
    type: SET_LOGGED_USER,
    loggedUser,
  };
}
