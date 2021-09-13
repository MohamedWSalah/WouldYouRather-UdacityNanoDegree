import React, { useEffect } from "react";
import Header from "./Header";
import DashboardTabs from "./DashboardTabs";
import { useDispatch, useSelector } from "react-redux";
import { handleReceiveQuestions } from "../actions/shared";

export default function Dashboard() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users[state.loggedUser]);
  const questions = useSelector((state) => state.questions);

  const answeredQuestions = () => {
    return Object.values(questions).filter((question) => {
      for (let answerId of Object.keys(currentUser.answers)) {
        console.log(answerId);
        if (answerId === question.id) return true;
      }
      return false;
    });
  };
  const sortedAnsweredQuestions = answeredQuestions().sort(
    (a, b) => b.timestamp - a.timestamp
  );

  const unAnsweredQuestions = () => {
    return Object.values(questions).filter((question) => {
      for (let answerId of Object.keys(currentUser.answers)) {
        console.log(answerId);
        if (answerId === question.id) return false;
      }
      return true;
    });
  };
  const sortedUnansweredQuestions = unAnsweredQuestions().sort(
    (a, b) => b.timestamp - a.timestamp
  );

  useEffect(() => {
    dispatch(handleReceiveQuestions());
  }, []);

  return (
    <div>
      <Header />
      <DashboardTabs
        answeredQuestions={sortedAnsweredQuestions}
        unAnsweredQuestions={sortedUnansweredQuestions}
      />
    </div>
  );
}
