import React, { useState, useEffect } from "react";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

import countryD from "../utils/country.json";
import pestleD from "../utils/pestle.json";
import sectorD from "../utils/sector.json";
import topicD from "../utils/topic.json";
import end_yearD from "../utils/end_year.json";

const FilterData = ({ data, setData }) => {
  const [country, setCountry] = useState(" ");
  const [pestle, setPestle] = useState(" ");
  const [sector, setSector] = useState(" ");
  const [topic, setTopic] = useState(" ");
  const [endyear, setEndyear] = useState(" ");
  
  const [ogData, setOGData] = useState(data);

  const getData = async () =>
    await fetch("http://localhost:4000/api/data/")
      .then((res) => res.json())
      .then((data) => setOGData(data?.data));

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    filterData();
  }, [country, pestle, sector, topic, endyear]);

  const filterData = () => {
    const filteredData = ogData.filter((item) => {
      console.log(item?.end_year)
      return (
        item?.country?.toLowerCase() == country.toLowerCase() ||
        item?.pestle?.toLowerCase() == pestle.toLowerCase() ||
        item?.sector?.toLowerCase() == sector.toLowerCase() ||
        item?.topic?.toLowerCase() == topic.toLowerCase() ||
        item?.end_year.toLowerCase() == endyear.toLowerCase()
      );
    });
    console.log(filteredData.length);
    setData(filteredData);
    if (filteredData.length == 0 && data.length != 0) setData(ogData);
  };

  return (
    <div className="flex p-3 justify-around gap-2">
      <div className="border-none w-full">
        <InputLabel id="demo-select-small">Country</InputLabel>
        <Select
          className="w-full text-black"
          labelId="demo-select-small"
          id="demo-select-small"
          value={country}
          label="Country"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        >
          <MenuItem value=" ">
            <em>None</em>
          </MenuItem>
          {countryD.map((item) => (
            <MenuItem value={item?.value?.country}>{item?.label}</MenuItem>
          ))}
        </Select>
      </div>
      <div className="border-none w-full">
        <InputLabel id="demo-select-small">Pestle</InputLabel>
        <Select
          className="w-full text-black"
          labelId="demo-select-small"
          id="demo-select-small"
          value={pestle}
          label="Pestle"
          onChange={(e) => {
            setPestle(e.target.value);
          }}
        >
          <MenuItem value=" ">
            <em>None</em>
          </MenuItem>
          {pestleD.map((item) => (
            <MenuItem value={item?.value?.pestle}>{item?.label}</MenuItem>
          ))}
        </Select>
      </div>
      <div className="border-none w-full">
        <InputLabel id="demo-select-small">Topic</InputLabel>
        <Select
          className="w-full text-black"
          labelId="demo-select-small"
          id="demo-select-small"
          value={topic}
          label="Topic"
          onChange={(e) => {
            setTopic(e.target.value);
          }}
        >
          <MenuItem value=" ">
            <em>None</em>
          </MenuItem>
          {topicD.map((item) => (
            <MenuItem value={item?.value?.topic}>{item?.label}</MenuItem>
          ))}
        </Select>
      </div>
      <div className="border-none w-full">
        <InputLabel id="demo-select-small">Sector</InputLabel>
        <Select
          className="w-full text-black"
          labelId="demo-select-small"
          id="demo-select-small"
          value={sector}
          label="Country"
          onChange={(e) => {
            setSector(e.target.value);
          }}
        >
          <MenuItem value=" ">
            <em>None</em>
          </MenuItem>
          {sectorD.map((item) => (
            <MenuItem value={item?.value?.sector}>{item?.label}</MenuItem>
          ))}
        </Select>
      </div>
      <div className="border-none w-full">
        <InputLabel id="demo-select-small">End-year</InputLabel>
        <Select
          className="w-full text-black"
          labelId="demo-select-small"
          id="demo-select-small"
          value={endyear}
          label="End Year"
          onChange={(e) => {
            setEndyear(e.target.value);
          }}
        >
          <MenuItem value=" ">
            <em>None</em>
          </MenuItem>
          {end_yearD.map((item) => (
            <MenuItem value={item?.value?.end_year}>{item?.label}</MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default FilterData;
