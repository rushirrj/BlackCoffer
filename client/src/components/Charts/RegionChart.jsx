import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import CircularProgress from "@mui/material/CircularProgress";
import { Chart, PointElement, LineElement, LinearScale } from "chart.js/auto";

const TopicChart = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    intensityFunc();
  }, []);

  const intensityFunc = async () => {
    fetch("http://localhost:4000/api/dashboard/region")
      .then((res) => res.json())
      .then((data) => {
        setData(data?.data);
      })
      .catch((err) => console.log(err));
  };

  const charData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: "Count Of Intensity",
        data: Object.values(data),
        backgroundColor: "rgba(0,7,61, 0.8)",
        borderWidth: 1,
        barThickness: 10,
      },
    ],
  };

  const options = {
    indexAxis:"y",
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        // display: false,
      },
      // title: {
      //   display: true,
      //   text: "Intensity",
      // },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div style={{ width: "500px" }}>
      {data == {} || Object.keys(data).length === 0 ? (
        <div className="flex justify-center">
          <CircularProgress />
        </div>
      ) : (
        <Bar data={charData} options={options} />
      )}
    </div>
  );
};

export default TopicChart;
