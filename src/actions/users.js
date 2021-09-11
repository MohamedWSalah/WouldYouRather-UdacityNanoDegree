export const RECEIVE_ALL_USERS = "RECEIVE_USERS";

export function receiveAllUsers(users) {
  return {
    type: RECEIVE_ALL_USERS,
    users,
  };
}
