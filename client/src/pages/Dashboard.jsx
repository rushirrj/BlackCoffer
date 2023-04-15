import React, { useState, useEffect } from "react";
import IntensityChart from "../components/Charts/IntensityChart";
import TopicChart from "../components/Charts/TopicChart";
import LikelihoodChart from "../components/Charts/LikelihoodChart";
import RelevanceChart from "../components/Charts/RelevanceChart";
import YearChart from "../components/Charts/YearChart";
import EndYearChart from "../components/Charts/EndYearChart";
import RegionChart from "../components/Charts/RegionChart";
import CountryChart from "../components/Charts/CountryChart";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-around">
          <IntensityChart />
          <TopicChart />
          <LikelihoodChart />
        </div>
        <div className="flex flex-row justify-around">
          <YearChart />
          <RelevanceChart />
          <EndYearChart />
        </div>
        <div className="flex flex-row justify-around">
          <CountryChart />
          <RegionChart />
          
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
