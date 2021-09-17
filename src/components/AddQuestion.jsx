import React, { useState } from "react";
import { Paper, Typography, Button, TextField } from "@material-ui/core";
import { handleAddQuestion } from "../actions/questions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function AddQuestion() {
  let history = useHistory();
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const dispatch = useDispatch();
  const handleAddButtonClick = () => {
    dispatch(handleAddQuestion(option1, option2)).then(history.push("/"));
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
        <Typography variant="h4" color="primary">
          Add Question
        </Typography>
        <Typography
          variant="h5"
          color="secondary"
          style={{ margin: "30px 0 30px 0" }}
        >
          Would you rather....
        </Typography>

        <TextField
          label="Option One"
          variant="outlined"
          style={{ width: "80%" }}
          value={option1}
          onChange={(e) => setOption1(e.target.value)}
        />
        <Typography variant="h4" color="primary">
          Or
        </Typography>
        <TextField
          label="Option Two"
          variant="outlined"
          style={{ width: "80%" }}
          value={option2}
          onChange={(e) => setOption2(e.target.value)}
        />
        <Button
          variant="contained"
          color="secondary"
          style={{
            width: "80%",
            margin: "20px 0 30px 0",
          }}
          onClick={() => handleAddButtonClick()}
          disabled={option1 === "" || option2 === "" ? true : false}
        >
          Submit Question
        </Button>
      </Paper>
    </div>
  );
}
