import React from "react";
import HotelFacilities from "./HotelFacilities";
import MinimumPrice from "./MinimumPrice";
import MaximumPrice from "./MaximumPrice";

const BottomFilter = () => {
  return (
    <div className="w-full h-1/12 border-b border-[#4E4E4E] flex gap-2 pb-3 ">
      <HotelFacilities />
      <MinimumPrice />
      <MaximumPrice />
    </div>
  );
};

export default BottomFilter;
