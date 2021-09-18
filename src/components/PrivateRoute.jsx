import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute({ children, ...rest }) {
  const loggedUser = useSelector((state) => state.loggedUser);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return loggedUser !== "" ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        );
      }}
    />
  );
}
