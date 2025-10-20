import React from "react";
import BaseTopFilter from "./topFilter/BaseTopFilter";
import BottomFilter from "./bottomFilter.tsx/BottomFilter";
import CardRent from "./cardReserve/CardRent";

const BaseHouseRent = () => {
  return (
    <div className="w-full bg-[#232323] py-8">
      <BaseTopFilter />
      <BottomFilter />
      <div className="w-full px-13 pt-5 flex justify-between flex-wrap gap-6">
        <CardRent />
        <CardRent />
        <CardRent />
        <CardRent />
      </div>
    </div>
  );
};

export default BaseHouseRent;
