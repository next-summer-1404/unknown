import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import Image from "next/image";
import GreenArrow from "../.././../assets/images/greenArrow.png";
import { BellAlertIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const DashboardHeader = () => {
  return (
    <div className="w-full rounded-2xl h-16 bg-[#393939] flex items-center ">
      <div className="w-2/3 flex items-center justify-between p-5">
        <p className="flex items-center gap-2 text-[#AAAA] text-md">
          داشبورد
          <Image
            src={GreenArrow}
            width={50}
            height={16}
            alt=""
            className="rotate-180 text-[#AAAA] "
          />
        </p>
        <ThemeSwitch />
      </div>
      <div className="w-1/3 border-r p-2 border-[#AAA] flex items-center gap-3">
        <BellAlertIcon className="w-5 h-5 text-[#AAAA]" />
        <div className="flex flex-col items-center">
          <p className="text-[#AAAA] flex items-center gap-1">سبحان
            <ChevronDownIcon className="w-4 h-4"/>
          </p>
          <p className="text-[#AAAA] text-[9px]">فروشنده</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
