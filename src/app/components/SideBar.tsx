"use client";
import React, { useState } from "react";
import { sideBarOptions } from "../constants/constants";
import { IoMdArrowDropright } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdAccountBalanceWallet } from "react-icons/md";
import { MdInventory } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";

const SideBar = () => {
  const pathName = usePathname();

  return (
    <div className="max-md:hidden border-r border-[#E6EFF5] lg:w-[300px] md:w-[250px] h-[100vh]">
      <div className="flex flex-col items-center justify-start">
        <ul>
          <p className="text-2xl font-semibold mt-5 mb-10 ">
            ATC<span className="text-blue-600">.</span>
          </p>
          {sideBarOptions?.map((item: any) => (
            <li key={item.label} className="gap-1 mb-10">
              <div className="flex items-center">
                <Link
                  href={item.redirectTo}
                  className={`flex justify-between items-center gap-4 font-medium ${
                    pathName === item?.redirectTo
                      ? "text-blue-600"
                      : "text-[#B1B1B1]"
                  }`}
                >
                  {item.label === "Dashboard" ? (
                    <AiFillHome className="w-5 h-5" />
                  ) : item.label === "Balance Sheet" ? (
                    <MdAccountBalanceWallet className="w-5 h-5" />
                  ) : item.label === "Transactions" ? (
                    <GiReceiveMoney className="w-5 h-5" />
                  ) : item.label === "Inventory" ? (
                    <MdInventory className="w-5 h-5" />
                  ) : (
                    ""
                  )}

                  <div className="flex items-center lg:text-base md:text-xs">
                    {item.label}
                    {/* {pathName === item?.redirectTo && (
                      <IoMdArrowDropright className="w-5 h-5 text-blue-600" />
                    )} */}
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
