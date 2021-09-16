import React, { useEffect } from "react";

import DashboardTabs from "./DashboardTabs";
import { useDispatch, useSelector } from "react-redux";
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
