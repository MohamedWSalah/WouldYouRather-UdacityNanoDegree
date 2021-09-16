import React, { useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Paper, Typography, Avatar } from "@material-ui/core";
import CircularProgressWithText from "./CircularProgressWithText";

export default function QuestionPoll() {
  const { id } = useParams();

  const question = useSelector((state) => state.questions[id]);
  const user = useSelector((state) => state.users[state.loggedUser]);
  const userAvatar = useSelector(
    (state) => state.users[question.author].avatarURL
  );
  const totalVotes =
    question.optionOne.votes.length + question.optionTwo.votes.length;
  const value1 = (question.optionOne.votes.length / totalVotes) * 100;
  const value2 = (question.optionTwo.votes.length / totalVotes) * 100;

  const userAnswer = user.answers[id];

  return (
    <Paper elevation={3} style={{ marginTop: "30px" }}>
      <Avatar
        src={userAvatar}
        alt={question.author}
        style={{
          height: "100px",
          width: "100px",
          position: "absolute",
          right: "0",
        }}
      />
      <div style={{ alignContent: "center" }}>
        <Typography variant="h4" color="primary">
          {question.author} asks
        </Typography>

        <Typography
          variant="h5"
          color="secondary"
          style={{ marginTop: "30px" }}
        >
          Would you rather....
        </Typography>
      </div>
      <Paper elevation={1} style={{ width: "50%", display: "inline-block" }}>
        <div style={{ display: "inline-block", height: "200px" }}>
          <Typography variant="h5" style={{ marginTop: "30px" }}>
            {question.optionOne.text}
          </Typography>
          <CircularProgressWithText value={value1} />
          <Typography
            variant="h5"
            color="secondary"
            style={{ marginTop: "30px" }}
          >
            {question.optionOne.votes.length} Votes out of {totalVotes}{" "}
            <Typography color="primary">
              {userAnswer === "optionOne" && "You chose this option"}&nbsp;
            </Typography>
          </Typography>
        </div>
      </Paper>

      <Paper elevation={1} style={{ width: "50%", display: "inline-block" }}>
        <div style={{ display: "inline-block", height: "200px" }}>
          <Typography variant="h5" style={{ marginTop: "30px" }}>
            {question.optionTwo.text}
          </Typography>

          <CircularProgressWithText value={value2} />
          <Typography
            variant="h5"
            color="secondary"
            style={{ marginTop: "30px" }}
          >
            {question.optionTwo.votes.length} Votes out of {totalVotes}
            <Typography color="primary">
              {userAnswer === "optionTwo" && "You chose this option"}&nbsp;
            </Typography>
          </Typography>
        </div>
      </Paper>
    </Paper>
  );
}
