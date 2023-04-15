import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const RelevanceChart = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    intensityFunc();
  }, []);

  const intensityFunc = async () => {
    fetch("http://localhost:4000/api/dashboard/relevance")
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
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
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
        text: "Relevance",
      },
    },
  };

  return (
    // <div style={{ width: "500px" }}>
    <div className="flex justify-center" style={{ width: "100%",height:"100%" }}>
      {data == {} || Object.keys(data).length === 0 ? (
        <div className="flex justify-center">
          <CircularProgress />
        </div>
      ) : (
        <Line data={charData} options={options} />
      )}
    </div>
  );
};

export default RelevanceChart;
