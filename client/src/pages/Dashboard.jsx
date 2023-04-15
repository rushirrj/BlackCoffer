import React, { useState, useEffect } from "react";
import IntensityChart from "../components/Charts/IntensityChart";

const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [labels, setLabel] = useState([]);
  // useEffect(() => {
  //   intensityFunc();
  // }, []);

  // const intensityFunc = async () => {
  //   fetch("http://localhost:4000/api/data")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // setData(data?.data);
  //       let mapData = {};
  //       mapData[0] = 0;
  //       data?.data?.forEach((item) => {
  //         if (mapData[item.intensity]) {
  //           mapData[item.intensity] += 1;
  //         } else if (item.intensity === null) {
  //           mapData[0] += 1;
  //         } else {
  //           mapData[item.intensity] = 1;
  //         }
  //       });

  //       setData(Object.values(mapData));
  //       setLabel(Object.keys(mapData));
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <div>
      <h1>Dashboard</h1>
      <IntensityChart />
    </div>
  )
};
export default Dashboard;
