import React from "react";
import HotelFacilities from "./HotelFacilities";
import MinimumPrice from "./MinimumPrice";
import MaximumPrice from "./MaximumPrice";

const BottomFilter = () => {
  return (
    <>
      {" "}
      <div className="w-full flex gap-2">
        <HotelFacilities />
        <MinimumPrice />
        <MaximumPrice />
      </div>
      <div className="w-full h-2 bg-[#4E4E4E]"></div>
    </>
  );
};

export default BottomFilter;
