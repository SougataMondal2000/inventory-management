"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import SingleRowCard from "../components/SIngleRowCard";
import DatePicker from "../components/DatePicker";
const page = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.npoint.io/4ea384c5583efa0d0242"
        );
        setData(response.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="bg-[#F5F7FA]">
      <div className="px-6 py-2">
        <h2 className="font-semibold lg:text-lg md:text-sm text-xs">
          Recent Transactions
        </h2>
        <Table data={data} />
      </div>
      <div className="px-6 py-2">
        <div className="flex items-center md:justify-between justify-start pr-10">
          <h2 className="font-semibold lg:text-lg md:text-sm text-xs">
            Past Transactions
          </h2>
          <DatePicker />
        </div>
        <SingleRowCard />
        <SingleRowCard />
        <SingleRowCard />
        <SingleRowCard />
        <SingleRowCard />
        <SingleRowCard />
      </div>
    </div>
  );
};

export default page;
