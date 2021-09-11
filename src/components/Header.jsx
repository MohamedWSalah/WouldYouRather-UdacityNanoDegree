import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Two from "../assets/2.png";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
export default function Header() {
  return (
    <div className="Header">
      <h3>Dashboard</h3>
      <h3>New Question</h3>
      <h3>Leaderbord</h3>

      <Avatar
        alt="Mohamed"
        src={Two}
        style={{ height: "45px", width: "45px", marginTop: "5px" }}
      />
      <h3>Username here</h3>
      <ExitToAppIcon style={{ marginTop: "15px", marginRight: "15px" }} />
    </div>
  );
}
