import { IHouses } from "@/types/IHouses";
import {
  CalendarDaysIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  CurrencyDollarIcon,
  NewspaperIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/24/outline";
import React from "react";

interface Props {
  house: IHouses;
}

const CallInfo = ({ house }: Props) => {
  return (
    <div className="relative w-[18%] flex flex-col items-center justify-center border border-[#565656] bg-[#393939] rounded-2xl pb-3 pt-5">
      <div className="absolute top-0 w-4/5 h-8 bg-[#565656] rounded-b-full flex items-center justify-center gap-1">
        <PhoneArrowDownLeftIcon className="w-4 h-4 text-white text-center" />
        <h3 className="text-[#FFFFFF] text-[13px]">اطلاعات تماس</h3>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-2 py-6">
        <div className="w-16 h-16 bg-white"></div>
        <div className="w-full flex flex-col items-center justify-center">
          <h3 className="text-white">{house.sellerName}</h3>

          <div className="w-full flex items-center gap-1 justify-center text-[13px]">
            <CalendarDaysIcon className="w-4 h-4 text-[#AAAAAA]" />
            <h3 className="text-[#AAAAAA] text-center">
              {house?.last_updated && Object.keys(house.last_updated).length > 0
                ? String(house.last_updated)
                : "بدون تاریخ"}
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-4 px-3 pb-6">
        <div className="w-full flex justify-between text-[13px]">
          <div className="flex gap-0.5">
            <CurrencyDollarIcon className="w-5 h-5 text-[#AAAAAA]" />
            <h3 className="text-[#AAAAAA]">قیمت رهن از:</h3>
          </div>
          <span className="text-[#8CFF45]">{house.price} ت</span>
        </div>
        <div className="w-full flex justify-between text-[13px]">
          <div className="flex gap-0.5">
            <NewspaperIcon className="w-5 h-5 text-[#AAAAAA]" />
          <h3 className="text-[#AAAAAA] ">قیمت اجاره از:</h3>
          </div>
          
          <span className="text-[#8CFF45]">{house.price} ت</span>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-4 px-3">
        <div className="w-full p-1.5 bg-[#8CFF45] rounded-2xl flex items-center justify-center gap-1 ">
          <PhoneArrowDownLeftIcon className="w-4 h-4  text-center text-[#363636]" />
          <h3 className="text-[#363636] text-[13px]"> 09112546369</h3>
        </div>
        <div className="w-full p-1.5 border border-white rounded-2xl flex items-center justify-center gap-1 ">
          <ChatBubbleOvalLeftEllipsisIcon className="w-4 h-4  text-center text-[#fff]" />
          <h3 className="text-[#fff] text-[13px]"> گفتگو با فروشنده</h3>
        </div>
      </div>
    </div>
  );
};

export default CallInfo;
