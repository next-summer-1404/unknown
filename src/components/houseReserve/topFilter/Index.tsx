"use client";
import { MegaphoneIcon } from "@heroicons/react/24/outline";
import React from "react";
import DestinationFilter from "./DestinationFilter";
import SortingFilter from "./SortingFilter";
import SearchFilter from "./SearchFilter";

interface TopFilterProps {
  totalCount: number;
}

const TopFilter: React.FC<TopFilterProps> = ({ totalCount }) => {
  return (
    <div className="w-full bg-[#2A2A2A] p-4 rounded-xl flex items-center justify-between ">
      <div className=" w-9/12 flex gap-4  items-center ">
        {" "}
        <DestinationFilter />
        <SortingFilter />
        <SearchFilter />
      </div>

      <div className="w-40 h-13 flex items-center justify-center rounded-lg border border-[#AAAAAA] ">
        <MegaphoneIcon className="w-5 h-5 text-white mr-2" />
        <p className="  text-white text-md  p-2">تعداد آگهی : {totalCount}</p>
      </div>
    </div>
  );
};

export default TopFilter;
