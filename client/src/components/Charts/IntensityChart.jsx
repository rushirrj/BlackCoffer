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
            label: 'intensity count',
            data: Object.values(data),
            backgroundColor: 'rgba(0,7,61, 0.8)',
            borderWidth: 1,
            barThickness: 10,
        }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
        // display: false,
      }, title: {
        display: true,
        text: 'Intensity Bar Chart',
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
