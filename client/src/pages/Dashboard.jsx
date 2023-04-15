import React, { useState, useEffect } from "react";
import IntensityChart from "../components/Charts/IntensityChart";
import LikelihoodChart from "../components/Charts/LikelihoodChart";

const Dashboard = () => {

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="flex flex-row">
        <IntensityChart />
        <LikelihoodChart />
      </div>
    </div>
  )
};
export default Dashboard;
