import { MapPinIcon, StarIcon } from "@heroicons/react/24/outline";
import React from "react";

const CardReserve = () => {
  return (
    <div className="w-full h-11/12 border-4 border-blue-500  ">
      <div className="w-full m-auto border border-[#4E4E4E] h-80 flex items-center ">
        <div className="w-3/12 h-60 border border-amber-400  "></div>
        <div className="w-6/12 border border-red-500 h-60 p-2 flex flex-col">
          <div className="border rounded-2xl bg-[#7569FF] w-1/3 h-10 flex items-center justify-center gap-1">
            <StarIcon className="w-5 h-5 text-white" />
            <p className="text-white text-center ">5ستاره</p>
          </div>
          <div className="text-white text-xl font-semibold mt-5">نام هتل </div>
          <div className="flex items-center gap-1 mt-5">
            <MapPinIcon className="w-5 h-5 text-[#AAAAAA]"/> 
            <p className="text-[#AAAAAA] text-center">آدرس هتل</p>
          </div>
        </div>
        <div className="w-3/12 h-60 border border-amber-700  "></div>
      </div>
    </div>
  );
};

export default CardReserve;
