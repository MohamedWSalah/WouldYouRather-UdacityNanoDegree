import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import Dashboard from "./components/Dashboard";

function App() {
  const loggedUser = useSelector((state) => state.loggedUser);

  return (
    <Router>
      <div className="App">
        <LoadingBar />
        {loggedUser !== "" ? (
          <Redirect to="/" exact component={Dashboard} />
        ) : (
          <Redirect to="/login" exact component={Login} />
        )}
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
