import React from "react";
import { AppBar, Tabs, Tab, Typography, Box } from "@material-ui/core";

export default function DashboardTabs(props) {
  const { answeredQuestions, unAnsweredQuestions } = props;
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
          <Tab label={`Unanswered Questions ${unAnsweredQuestions.length}`} />
          <Tab label={`Answered Questions ${answeredQuestions.length}`} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {answeredQuestions.map((e) => e.author)}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Answered Questions
      </TabPanel>
    </div>
  );
}
