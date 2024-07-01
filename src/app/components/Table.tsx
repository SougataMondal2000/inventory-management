"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Table = ({ data }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-3xl p-3 my-2">
      <table className="min-w-full divide-y divide-gray-100">
        <thead className="">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-[#718EBF] uppercase tracking-wider">
              Date
            </th>
            {/* <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
              Item ID
            </th> */}
            <th className="px-6 py-3 text-left text-sm font-medium text-[#718EBF] uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-[#718EBF] uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-[#718EBF] uppercase tracking-wider">
              Download
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {data?.map((item: any, index: any) => (
            <tr key={index}>
              <td className="px-6 py-3 font-medium whitespace-nowrap flex items-center">
                {item.Date}
              </td>
              {/* <td className="px-6 py-3 font-medium whitespace-nowrap">{item.id}</td> */}
              <td className="px-6 py-3 font-medium whitespace-nowrap">
                {item.Description}
              </td>
              <td className="px-6 py-3 font-medium whitespace-nowrap">
                ${item.Price}
              </td>
              <td className="px-6 py-3 font-medium whitespace-nowrap">
                <button className="text-[#123288] border border-[#123288] rounded-full py-1 px-3 hover:text-[#1814F3] hover:border hover:border-[#1814F3]">
                  Download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
