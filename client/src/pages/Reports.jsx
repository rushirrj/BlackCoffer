import React from "react";
import ReportCard from "../components/Cards/ReportCard";
const Reports = () => {
  const [data, setData] = React.useState([]);
  const getData = () =>
    fetch("http://localhost:4000/api/data/")
      .then((res) => res.json())
      .then((data) => setData(data?.data));
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <div className="grid grid-cols-3 gap-3">
      {data.map((item) => (
        <ReportCard content={item} />
      ))}
    </div>
  );
};

export default Reports;
