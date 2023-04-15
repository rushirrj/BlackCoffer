import React, { useState, useEffect } from "react";
import IntensityChart from "../components/Charts/IntensityChart";
import LikelihoodChart from "../components/Charts/LikelihoodChart";
import RelevanceChart from "../components/Charts/RelevanceChart";
import YearChart from "../components/Charts/YearChart";
import EndYearChart from "../components/Charts/EndYearChart";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row">
          <IntensityChart />
          <RelevanceChart />
          <LikelihoodChart />
        </div>
        <div className="flex flex-row">
          <YearChart />
          <EndYearChart />
          
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
