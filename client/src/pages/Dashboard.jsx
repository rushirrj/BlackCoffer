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
      <h1 className="font-bold text-center text-xl py-3">Dashboard</h1>
      <div className="flex flex-col gap-2 flex-wrap">
        <div className="flex flex-row justify-around flex-wrap gap-2">
          <div className="shadow-md p-2"><IntensityChart /></div>
          <div className="shadow-md p-2"><TopicChart /></div>
          
        </div>
        <div className="flex flex-row justify-around flex-wrap">
          <div className=" shadow-md p-2 "><LikelihoodChart /></div>
          <div className=" shadow-md p-2 "><CountryChart /></div>
        </div>
        <div className="flex flex-row justify-around flex-wrap">
          <div className="shadow-md p-2"><YearChart /></div>
          <div className="shadow-md p-2"><EndYearChart /></div>
        </div>
        <div className="flex flex-row justify-around flex-wrap">
          <div className="shadow-md p-2"><RegionChart /></div>
          <div className="shadow-md p-2"><RelevanceChart /></div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
