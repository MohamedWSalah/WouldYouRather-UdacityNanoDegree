import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  HashRouter,
  Switch,
} from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import QuestionPage from "./components/QuestionPage";
import AddQuestion from "./components/AddQuestion";
import Leaderboard from "./components/Leaderboard";
function App() {
  const loggedUser = useSelector((state) => state.loggedUser);

  return (
    <Router>
      <div className="App">
        <LoadingBar />
        {loggedUser && <Header />}
        <Switch>
          <Route exact path="/">
            {loggedUser ? <Dashboard /> : <Redirect to="/login" />}
          </Route>

          <Route exact path="/login">
            {loggedUser ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route exact path="/questions/:id">
            {loggedUser ? <QuestionPage /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/add">
            {loggedUser ? <AddQuestion /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/leaderboard">
            {loggedUser ? <Leaderboard /> : <Redirect to="/login" />}
          </Route>

          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
