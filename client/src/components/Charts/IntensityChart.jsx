import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

import { Chart, PointElement, LineElement, LinearScale} from 'chart.js/auto';
const IntensityChart = () => {
  const [data, setData] = useState({});
  useEffect( () => {
    intensityFunc();
  }, []);

  const intensityFunc = async () => {
    fetch("http://localhost:4000/api/data")
      .then((res) => res.json())
      .then((data) => {
        let mapData = {};
        mapData[0] = 0;
        data?.data?.forEach((item) => {
          if (mapData[item.intensity]) {
            mapData[item.intensity] += 1;
          } else if (item.intensity === null) {
            mapData[0] += 1;
          } else {
            mapData[item.intensity] = 1;
          }
        });
        setData(mapData);
      })
      .catch((err) => console.log(err));
  };

  const charData = {
    labels: Object.keys(data),
    datasets: [
        {
            label: 'Published',
            data: Object.values(data),
            backgroundColor: "#404040",
            borderWidth: 0,
            barThickness: 10,
            borderRadius: 5
        }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
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

  return <Bar data={charData} options={options} />;
};

export default IntensityChart;
