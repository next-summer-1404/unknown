import React from "react";
import HotelFacilities from "./HotelFacilities";
import MinimumPrice from "./MinimumPrice";
import MaximumPrice from "./MaximumPrice";

const BottomFilter = () => {
  return (
    <div className="w-full h-2/12 border-b border-[#4E4E4E] flex gap-2 pb-3 sticky top-0 z-30 bg-[#2A2A2A]">
      <HotelFacilities />
      <MinimumPrice />
      <MaximumPrice />
    </div>
  );
};

export default BottomFilter;
