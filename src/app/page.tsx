"use client";
import Image from "next/image";
import Table from "./components/Table";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Metrics from "./components/Metrics";
import LineChart from "./components/LineChart";

export default function Home() {
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
    <main className="bg-[#F5F7FA]">
      <div className="px-6 py-2">
        <h2 className="font-semibold lg:text-lg md:text-sm text-xs">
          Daily Metrics
        </h2>
        <div className="flex items-center md:justify-start justify-between gap-10">
          <Metrics title={"Cash"} amount={"5,443"} />
          <Metrics title={"Income"} amount={"5,443"} />
          <Metrics title={"Expense"} amount={"5,443"} />
          <Metrics title={"Profit"} amount={"5,443"} />
        </div>
      </div>
      <div className="px-6 py-2">
        <h2 className="font-semibold lg:text-lg md:text-sm text-xs">
          Recent Transactions
        </h2>
        <Table data={data} />
      </div>
      <div className="px-6 py-2">
        <h2 className="font-semibold lg:text-lg md:text-sm text-xs">
          Weekly Revenue
        </h2>
        <LineChart />
      </div>
    </main>
  );
}
