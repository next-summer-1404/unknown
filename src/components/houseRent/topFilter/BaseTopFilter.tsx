'use client'
import React from "react";
import CityFilter from "./CityFilter";
import PropertyType from "./PropertyType";
import FacilityFilter from "./FacilityFilter";
import SortFilter from "./SortFilter";
import TopSearch from "./TopSearch";


interface Props {
  totalCount: number;
}
const BaseTopFilter: React.FC<Props>  = ({totalCount}) => {
  return (
    <div>
      <div className="w-11/12 mx-auto bg-[#303030] rounded-2xl border border-[#303030] p-5 mt-20">
        <div className="flex flex-wrap items-center justify-between gap-3 text-[#AAAAAA]">
          <CityFilter />
          <PropertyType />
          <FacilityFilter />

          <SortFilter />

          <TopSearch />

          <div className="text-[#AAAAAA] text-sm whitespace-nowrap">
            تعداد آگهی: <span className="text-[#AAAAAA] font-mediu">{totalCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseTopFilter;
