import React, { useState, useEffect } from "react";
import IntensityChart from "../components/Charts/IntensityChart";

const Dashboard = () => {

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="flex flex-row">
        <IntensityChart />
      </div>
    </div>
  )
};
export default Dashboard;
