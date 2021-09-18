import React from "react";
import { AppBar, Tabs, Tab, Typography, Box } from "@material-ui/core";
import Question from "./QuestionBox";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const currentUser = useSelector((state) => state.users[state.loggedUser]);

  const questions = useSelector((state) => state.questions);

  const answeredQuestions = () => {
    return Object.values(questions).filter((question) => {
      for (let answerId of Object.keys(currentUser.answers)) {
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
        if (answerId === question.id) return false;
      }
      return true;
    });
  };
  const sortedUnansweredQuestions = unAnsweredQuestions().sort(
    (a, b) => b.timestamp - a.timestamp
  );

  const [value, setValue] = React.useState(0);
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
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
      {questions ? (
        <>
          <Typography
            variant="h4"
            align="left"
            color="secondary"
            style={{ fontWeight: 600, paddingBottom: "30px" }}
          >
            Dashboard
          </Typography>
          <AppBar position="static">
            <Tabs value={value} onChange={handleChange}>
              <Tab
                label={`Unanswered Questions ${sortedUnansweredQuestions.length}`}
              />
              <Tab
                label={`Answered Questions ${sortedAnsweredQuestions.length}`}
              />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            {sortedUnansweredQuestions.map((e, index) => (
              <Question key={index} question={e} />
            ))}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {sortedAnsweredQuestions.map((e, index) => (
              <Question key={index} question={e} />
            ))}
          </TabPanel>
        </>
      ) : (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
}
