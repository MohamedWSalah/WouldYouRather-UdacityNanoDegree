import React, { useState, useEffect } from "react";
import wyr from "../assets/wyr.png";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "@material-ui/core";
import { BrowserRouter as Redirect } from "react-router-dom";
import { handleReceivingData } from "../actions/shared";
import { setLoggedUser } from "../actions/loggedUser";

export default function Login() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const LU = useSelector((state) => state);
  const [selectedUser, setSelectedUser] = useState("");
  useEffect(() => {
    dispatch(handleReceivingData());
  }, []);

  const handleSignInBtnClick = () => {
    console.log(selectedUser);
    dispatch(setLoggedUser(selectedUser));
  };
  return (
    <div className="LoginDiv">
      <img
        src={wyr}
        alt="Would you rather?"
        style={{ width: "10vw", height: "10vw" }}
      />
      <div style={{ paddingTop: "30px" }}>
        <FormControl>
          <InputLabel>Select User</InputLabel>
          <Select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            style={{ width: "50vw" }}
          >
            {Object.keys(users).map((user) => (
              <MenuItem value={user} key={user}>
                <Avatar
                  src={users[user].avatarURL}
                  alt={user}
                  size="small"
                  style={{ display: "inline-block" }}
                />
                <div>{user}</div>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <Button
        variant="contained"
        color="secondary"
        disabled={selectedUser === "" && true}
        style={{ width: "50vw", marginTop: "20px" }}
        onClick={() => handleSignInBtnClick()}
      >
        Secondary
      </Button>
    </div>
  );
}

//
