import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [_udata, setData] = useState([]);
  const [userData, setUserData] = useState({
    labels: _udata.map((data) => data.topic),
    datasets: [
      {
        label: "Users Gained",
        data: _udata.map((data) => data.sector),
      },
    ],
  });
  const getData = () => {
    fetch("http://localhost:4000/api/data")
      .then((response) => response.json())
      .then((d) => setData(decodeURI))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  });

  return <div className="title"></div>;
};

export default Dashboard;
