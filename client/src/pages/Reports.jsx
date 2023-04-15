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
    <div>
      <div className="text-center"><h1 className="font-bold text-2xl py-2">Reports</h1></div>
      <div className="grid grid-cols-3 gap-3">
        {data.map((item) => (
          <ReportCard content={item} />
        ))}
      </div>
    </div>
  );
};

export default Reports;
