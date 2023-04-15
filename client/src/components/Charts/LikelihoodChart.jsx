import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import CircularProgress from "@mui/material/CircularProgress";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

const LikelihoodChart = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    intensityFunc();
  }, []);

  const intensityFunc = async () => {
    fetch("http://localhost:4000/api/dashboard/likelihood")
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
        label: "Count Of Likelihood",
        data: Object.values(data),
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Likelihood",
      },
    },
  };

  return (
    <div style={{ width: "250px", height: "250px" }}>
      {data == {} || Object.keys(data).length === 0 ? (
        <div className="flex justify-center">
          <CircularProgress />
        </div>
      ) : (
        <Doughnut data={charData} options={options}/>
      )}
    </div>
  );
};

export default LikelihoodChart;
