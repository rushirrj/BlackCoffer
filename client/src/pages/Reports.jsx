import React, { useState, useEffect } from "react";
import ReportCard from "../components/Cards/ReportCard";
import ReactPaginate from "react-paginate";
import FilterData from "../components/FilterData";
const Reports = ({ itemsPerPage }) => {
  const [data, setData] = useState([]);
  const getData = () =>
    fetch("http://localhost:4000/api/data/")
      .then((res) => res.json())
      .then((data) => setData(data?.data));
  useEffect(() => {
    getData();
  }, []);

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="font-bold text-2xl py-2">REPORTS</h1>
      </div>
      <hr />
      <FilterData data={data} setData={setData} />
      <hr />
      <ListFeeds data={currentItems} />
      <div className="flex justify-around py-5">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="w-1/2 flex justify-around items-center"
        />
      </div>
    </div>
  );
};

const ListFeeds = ({ data }) => {
  return (
    <div className="grid grid-cols-3 gap-3 p-3">
      {data.map((item, key) => (
        <ReportCard content={item} key={key} />
      ))}
    </div>
  );
};

export default Reports;
