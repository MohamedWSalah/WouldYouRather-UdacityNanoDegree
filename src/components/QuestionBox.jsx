import React from "react";
import { Paper, Typography, Avatar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
export default function QuestionBox(props) {
  const { question } = props;

  const userAvatar = useSelector(
    (state) => state.users[question.author].avatarURL
  );

  return (
    <Paper elevation={3} style={{ marginTop: "30px", display: "flex" }}>
      <Avatar
        src={userAvatar}
        alt={question.author}
        style={{ height: "100px", width: "100px", padding: "30px" }}
      />
      <div style={{ width: "100%", height: "100%" }}>
        <Typography
          variant="h4"
          color="secondary"
          style={{ display: "inline" }}
        >
          {question.author}
        </Typography>
        <Typography variant="h5" style={{ display: "inline" }}>
          &nbsp; asking Would your rather
        </Typography>
        <div style={{ marginTop: "25px" }}>
          <Typography
            variant="h6"
            color="primary"
            style={{ display: "inline-block", width: "80%" }}
          >
            {question.optionOne.text}
          </Typography>

          <Typography
            variant="h3"
            color="secondary"
            style={{ display: "inline-block", width: "100%" }}
          >
            &nbsp; OR &nbsp;
          </Typography>

          <Typography
            variant="h6"
            color="primary"
            style={{ display: "inline-block", width: "80%" }}
          >
            {question.optionTwo.text}
          </Typography>
        </div>
        <Link
          to={`/questions/${question.id}`}
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            color="secondary"
            style={{ width: "80%", marginBottom: "10px" }}
          >
            View Question
          </Button>
        </Link>
      </div>
    </Paper>
  );
}
