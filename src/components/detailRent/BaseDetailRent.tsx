import { IHouses } from "@/types/IHouses";
import React from "react";
import InfoCall from "./InfoCall";
import EndTop from "./EndTop";
import TabRent from "./TabRent";
import AdvertHouseRent from "./AdvertHouseRent";

interface Props {
  house: IHouses;
}

const BaseDetailRent: React.FC<Props> = ({ house }) => {
  return (
    <div className="border border-[#232323] px-18 w-full">
      <div className="w-full h-auto mt-30 flex gap-5 ">
        <div className="w-5/12 h-96 border border-red-400 rounded-2xl"></div>
        <div className="w-4/12 h-96 flex flex-col gap-5">
          <div className="w-full h-1/2  border border-green-400 rounded-2xl"></div>
          <div className="w-full h-1/2  border border-green-400 rounded-2xl"></div>
        </div>
        <InfoCall house={house} />
      </div>
      <EndTop house={house} />
      <TabRent house={house} />
      <AdvertHouseRent house={house}/>
    </div>
  );
};

export default BaseDetailRent;
