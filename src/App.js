import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import QuestionPage from "./components/QuestionPage";
import AddQuestion from "./components/AddQuestion";
import Leaderboard from "./components/Leaderboard";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const loggedUser = useSelector((state) => state.loggedUser);

  return (
    <Router>
      <div className="App">
        <LoadingBar />
        {loggedUser && <Header />}

        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>

          <PrivateRoute exact path="/">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute exact path="/questions/:id">
            <QuestionPage />
          </PrivateRoute>
          <PrivateRoute exact path="/add">
            <AddQuestion />
          </PrivateRoute>
          <PrivateRoute exact path="/leaderboard">
            <Leaderboard />
          </PrivateRoute>

          <PrivateRoute path="">
            <NotFound />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
