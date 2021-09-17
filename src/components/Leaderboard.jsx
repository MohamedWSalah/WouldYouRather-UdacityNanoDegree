import React from "react";
import LeaderboardCard from "./LeaderboardCard";
import { Typography } from "@material-ui/core";
import LeaderboardData from "./LeaderboardData";
export default function Leaderboard() {
  const sortedUsers = LeaderboardData();

  return (
    <div style={{ textAlign: "-webkit-center", marginBottom: "30px" }}>
      <Typography variant="h4" color="secondary" style={{ marginTop: "40px" }}>
        Leaderboard
      </Typography>
      {sortedUsers.map((user, index) => (
        <LeaderboardCard user={user} index={index} />
      ))}
    </div>
  );
}
