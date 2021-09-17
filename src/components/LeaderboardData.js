import { useSelector } from "react-redux";

export default function LeaderboardData() {
  const users = useSelector((state) => state.users);

  const usersSorted = Object.values(users).sort((user1, user2) => {
    return (
      user2.questions.length +
      Object.keys(user2.answers).length -
      (user1.questions.length + Object.keys(user1.answers).length)
    );
  });

  return usersSorted;
}
