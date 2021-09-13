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

function App() {
  const loggedUser = useSelector((state) => state.loggedUser);

  return (
    <Router>
      <div className="App">
        <LoadingBar />
        <Switch>
          <Route exact path="/">
            {loggedUser ? <Dashboard /> : <Redirect to="/login" />}
          </Route>

          <Route exact path="/login">
            {loggedUser ? <Redirect to="/" /> : <Login />}
          </Route>

          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
