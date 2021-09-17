import React, { useEffect, useState } from "react";

import DashboardTabs from "./DashboardTabs";
import { useDispatch } from "react-redux";
import { handleReceiveQuestions } from "../actions/shared";

export default function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleReceiveQuestions());
  }, []);

  return (
    <div>
      <DashboardTabs />
    </div>
  );
}
