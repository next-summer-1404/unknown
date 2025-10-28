import {
  ArrowUturnUpIcon,
  ClipboardIcon,
  MapPinIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import Slider from "./Slider";
import { IHouses } from "@/types/IHouses";
import Link from "next/link";

interface TopBaseDetailProps {
  house: IHouses;
}

const TopBaseDetail = async ({ house }: TopBaseDetailProps) => {
  // const houseData = await getHouseDetail(id)
  

  return (
    <div className="w-11/12 h-auto m-auto mt-20 flex gap-10">
      <div className="w-5/6 h-auto ">
        <p className="text-white text-xl font-bold p-2">{house.title}</p>
        <div className="flex items-center gap-1 mx-2 py-4">
          <MapPinIcon className="w-4 h-4 text-[#AAAAAA]" />
          <p className="text-[#AAAAAA] text-sm font-medium">
            آدرس: {house.address}
          </p>
        </div>
        <div className="w-full h-[444px] rounded-xl overflow-hidden bg-[#393939] mb-20">
          <Slider house={house}/>
        </div>
      </div>
      <div className="w-1/6 h-auto ">
        <div className="flex items-center justify-center gap-3 mt-8">
          <div className="flex items-center justify-center gap-1 px-3 py-2 rounded-xl bg-[#7569FF] text-white text-sm font-semibold  transition">
            {house.rate ? (
              <>
                <StarIcon className="w-4 h-4 text-white" />
                {house.rate}
                <p>ستاره</p>
              </>
            ) : (
              <p className="text-center ">بدون امتیاز</p>
            )}
          </div>
          <div className="w-[1px] h-6 bg-[#555] mx-2" />

          <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#2F2F2F] border border-[#444] hover:bg-[#3A3A3A] transition">
            <ClipboardIcon className="w-5 h-5 text-[#AAAAAA]" />
          </button>
          <Link href={'/houseReserve'} className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#8CFF45] transition">
            <ArrowUturnUpIcon className="w-5 h-5 bg-[#8CFF45]" />
          </Link>
        </div>
        <div className="w-full h-auto  my-5 grid grid-cols-2 gap-5">
          <div className="h-24 w-24 bg-[#393939] rounded-2xl"></div>
          <div className="h-24 w-24 bg-[#393939] rounded-2xl"></div>
          <div className="h-24 w-24 bg-[#393939] rounded-2xl"></div>
          <div className="h-24 w-24 bg-[#393939] rounded-2xl"></div>
          <div className="h-24 w-24 bg-[#393939] rounded-2xl"></div>
          <div className="h-24 w-24 bg-[#393939] rounded-2xl"></div>
          <div className="h-24 w-24 bg-[#393939] rounded-2xl"></div>
          <div className="h-24 w-24 bg-[#393939] rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default TopBaseDetail;
