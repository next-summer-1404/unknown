import { IHouses } from "@/types/IHouses";
import React from "react";
import AdvertHouseRent from "./AdvertHouseRent";

interface Props {
  house: IHouses;
}

const RentFacilities = ({ house }: Props) => {
  return (
    <>
      <div className="w-full  mt-5 h-auto flex gap-2">
        <div className="w-3/12 rounded-2xl  border bg-[#393939]">
          <p className="text-white text-center p-3"> بهداشتی</p>
          <div className="bg-[#7569FF] rounded-2xl w-2/3 m-auto mb-2">
            <p className="text-white text-center">{house.bathrooms}</p>
          </div>
        </div>
        <div className="w-3/12 rounded-2xl  border bg-[#393939]">
          <p className="text-white text-center p-3"> پارکینگ</p>
          <div className="bg-[#7569FF] rounded-2xl w-2/3 m-auto mb-2">
            <p className="text-white text-center">{house.parking}</p>
          </div>
        </div>
        <div className="w-3/12 rounded-2xl  border bg-[#393939]">
          <p className="text-white text-center p-3"> اتاق خواب</p>
          <div className="bg-[#7569FF] rounded-2xl w-2/3 m-auto mb-2">
            <p className="text-white text-center">{house.rooms}</p>
          </div>
        </div>
        <div className="w-3/12 rounded-2xl  border bg-[#393939]">
          <p className="text-white text-center p-3"> نوع حیاط</p>
          <div className="bg-[#7569FF] rounded-2xl w-2/3 m-auto mb-2">
            <p className="text-white text-center">{house.yard_type}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentFacilities;
