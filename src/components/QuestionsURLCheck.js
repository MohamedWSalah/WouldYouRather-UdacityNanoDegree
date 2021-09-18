import React from "react";
import QuestionPage from "./QuestionPage";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router";

export default function QuestionsURLCheck() {
  const { id } = useParams();
  const questions = useSelector((state) => state.questions);

  if (!questions[id]) {
    return <Redirect to="/undefined" />;
  } else {
    return <QuestionPage />;
  }
}
