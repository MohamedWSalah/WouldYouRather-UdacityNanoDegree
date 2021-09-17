import React from "react";
import { Paper, Typography, Avatar, Button } from "@material-ui/core";

export default function LeaderboardCard(props) {
  const { user, index } = props;
  const noOfQuestionsAsked = user.questions.length;
  const noOfQuestionsAnswered = Object.keys(user.answers).length;

  return (
    <div
      style={{
        paddingTop: "10px",
        width: "70%",
      }}
    >
      <Paper
        elevation={3}
        style={{ marginTop: "30px", display: "flex", position: "relative" }}
      >
        <div className="circle">{index + 1}</div>
        <Avatar
          src={user.avatarURL}
          style={{
            height: "100px",
            width: "100px",
            position: "absolute",
            right: 0,
          }}
        />
        <div style={{ margin: "30px" }}>
          <Typography variant="h4" align="left" color="primary">
            {user.name}
          </Typography>

          <Typography variant="h6" align="left" color="secondary">
            number of questions user asked: {noOfQuestionsAsked}
          </Typography>
          <Typography variant="h6" align="left" color="secondary">
            number of questions user answered: {noOfQuestionsAnswered}
          </Typography>
          <Typography variant="h5" align="left">
            Total Score :
            <span style={{ color: "blue", fontSize: "40px" }}>
              {noOfQuestionsAsked + noOfQuestionsAnswered}
            </span>
          </Typography>
        </div>
      </Paper>
    </div>
  );
}
