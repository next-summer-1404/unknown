import {
  BarsArrowDownIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  MegaphoneIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/solid";
import React from "react";
import TopFilter from "./TopFilter";
import BottomFilter from "./BottomFilter";
import MapReserve from "./MapReserve";
import CardReserve from "./CardReserve";

const BaseReserve = () => {
  return (
    <div className="w-full h-auto border border-amber-300">
      <TopFilter/>

      <div className="w-11/12 m-auto h-[1080px] mt-5 bg-[#2A2A2A] p-4 rounded-xl border border-red-500 flex gap-5">
        <div className="w-3/5 h-auto border border-amber-100 ">
        <BottomFilter/>
          <CardReserve/>
        </div>
        {/*map*/}
        <MapReserve/>
      </div>
    </div>
  );
};

export default BaseReserve;
