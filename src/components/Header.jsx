import React from "react";
import Avatar from "@material-ui/core/Avatar";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useSelector, useDispatch } from "react-redux";

import { setLoggedUser } from "../actions/loggedUser";
import { Link } from "react-router-dom";

export default function Header() {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.loggedUser);

  const User = useSelector((state) => {
    if (loggedUser) {
      return state.users[loggedUser];
    }
  });

  const logout = () => {
    dispatch(setLoggedUser(""));
  };
  return (
    <div className="Header">
      <h3>
        <Link to="/" style={{ textDecoration: "none" }}>
          Dashboard
        </Link>
      </h3>

      <h3>
        <Link to="/add" style={{ textDecoration: "none" }}>
          New Question
        </Link>
      </h3>
      <h3>Leaderbord</h3>

      <Avatar
        alt="Mohamed :D"
        src={User?.avatarURL}
        style={{ height: "45px", width: "45px", marginTop: "5px" }}
      />
      <h3>{User?.name}</h3>
      <ExitToAppIcon
        style={{ marginTop: "15px", marginRight: "15px", cursor: "pointer" }}
        onClick={() => logout()}
      />
    </div>
  );
}
