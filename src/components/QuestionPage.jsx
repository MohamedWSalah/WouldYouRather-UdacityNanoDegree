import React, { useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  Paper,
  Typography,
  Avatar,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import QuestionBox from "./QuestionBox";
import { handleAnswerSubmit } from "../actions/questions";

export default function QuestionPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [answer, setAnswer] = useState("");
  const question = useSelector((state) => state.questions[id]);

  const userAvatar = useSelector(
    (state) => state.users[question.author].avatarURL
  );
  const qid = question.id;

  const handleBtnSubmit = () => {
    console.log(qid, answer);
    dispatch(handleAnswerSubmit(qid, answer));
  };
  return (
    <div
      style={{
        paddingTop: "40px",
        width: "70%",
        position: "absolute",
        left: "15%",
      }}
    >
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

          <RadioGroup
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            style={{ display: "inline-flex" }}
          >
            <FormControlLabel
              value="optionOne"
              control={<Radio />}
              label={question.optionOne.text}
              style={{}}
            />
            <FormControlLabel
              value="optionTwo"
              control={<Radio />}
              label={question.optionTwo.text}
            />
          </RadioGroup>
        </div>
        <Button
          variant="contained"
          color="secondary"
          style={{ width: "50%", marginBottom: "10px" }}
          disabled={answer === "" ? true : false}
          onClick={() => handleBtnSubmit()}
        >
          Submit answer
        </Button>
      </Paper>
    </div>
  );
}
