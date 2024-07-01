"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

const NavBar = () => {
  const pathName = usePathname();
  return (
    <div className="h-[70px] border-b border-[#E6EFF5] flex justify-between items-center">
      <h2 className="font-semibold lg:text-xl md:lg ml-6">
        {pathName === "/"
          ? "Dashboard"
          : pathName === "/balancesheet"
          ? "Balance Sheet"
          : pathName === "/transactions"
          ? "Transactions"
          : pathName === "/manageinventory"
          ? "Inventory"
          : ""}
      </h2>
      <div className="mr-6 flex justify-between items-center rounded-full bg-[#F5F7FA] px-4 gap-2">
        <HiMagnifyingGlass className="text-[#718EBF] w-5 h-5" />
        <input
          type="search"
          placeholder="Search for something"
          className="w-[250px] h-[45px] bg-transparent outline-none text-sm"
        />
      </div>
    </div>
  );
};

export default NavBar;
