import { HeartIcon, MapPinIcon, StarIcon } from "@heroicons/react/24/outline";
import React from "react";
import LikeRent from "./LikeRent";
import { IHouses } from "@/types/IHouses";

interface Props {
  house: IHouses;
}

const EndTop = ({ house }: Props) => {
  return (
    <>
      <div className="w-1/2 h-auto mt-5 mr-16 flex gap-2">
        <div className="w-1/4 p-3 border border-[#565656] rounded-2xl flex items-center justify-center bg-[#393939]">
          <p className="text-white ">{house?.categories?.name || "بدون دسته‌بندی"} </p>
        </div>
        <div className="w-1/4 p-3 border border-[#565656] rounded-2xl flex items-center justify-center bg-[#393939]">
          <p className="text-white "> ظرفیت:{house?.capacity || 0}</p>
        </div>
        <div className="w-1/4 p-3 border border-[#565656] rounded-2xl flex items-center justify-center bg-[#393939]">
          <p className="text-white ">{house?.transaction_type || 'رزرو نشده'}</p>
        </div>
        <div className="w-1/4 p-3 border border-[#565656] rounded-2xl flex items-center justify-center gap-1 bg-[#7569FF]">
          <StarIcon className="w-5 h-5 text-white" />
          <p className="text-white ">
            {house?.rate != null ? house.rate : 0}
            ستاره
          </p>
        </div>
      </div>
      <div className="w-1/2 h-auto p-2 mr-16 mt-5">
        <p className="text-white text-xl"> {house?.title|| 'هتل جدید'}</p>
      </div>
      <div className="flex ">
        <div className="w-1/2 h-auto p-2 mr-16 mt-5 flex gap-1 ">
          <MapPinIcon className="w-5 h-5 text-[#AAAAAA]" />
          <p className="text-[#AAAAAA] text-sm">
            {" "}
            {house.address}
          </p>
        </div>
        <LikeRent house={house} />
      </div>
    </>
  );
};

export default EndTop;
