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

const InfoCall = ({ house }: Props) => {
  return (
    <div className="w-3/12 h-auto border border-[#565656] bg-[#393939] rounded-2xl pb-5">
      <div className="w-4/5 mx-auto h-10 bg-[#565656] rounded-b-full flex items-center justify-center gap-1">
        <PhoneArrowDownLeftIcon className="w-5 h-5 text-white text-center" />
        <p className="text-[#FFFFFF] ">اطلاعات تماس</p>
      </div>
      <p className="text-white text-center p-5"> {house.sellerName} </p>
      <div className="w-4/5 mx-auto h-10 flex items-center gap-1 justify-center">
        <CalendarDaysIcon className="w-5 h-5 text-[#AAAAAA]" />
        <p className="text-[#AAAAAA] text-center">
          {house?.last_updated && Object.keys(house.last_updated).length > 0
            ? String(house.last_updated)
            : "بدون تاریخ"}
        </p>
      </div>
      <div className="w-full  flex gap-2 mt-10 mx-3">
        <CurrencyDollarIcon className="w-5 h-5 text-[#AAAAAA]" />
        <p className="text-[#AAAAAA] ">قیمت رهن از:</p>
        <span className="text-[#8CFF45] mr-10 text-xl">{house.price} ت</span>
      </div>
      <div className="w-full  flex gap-2 mt-5 mx-3">
        <NewspaperIcon className="w-5 h-5 text-[#AAAAAA]" />
        <p className="text-[#AAAAAA] ">قیمت اجاره از:</p>
        <span className="text-[#8CFF45] mr-10 text-xl">{house.price} ت</span>
      </div>
      <div className="w-4/5 mx-auto p-2 mt-5 bg-[#8CFF45] rounded-2xl flex items-center justify-center gap-1 ">
        <PhoneArrowDownLeftIcon className="w-5 h-5  text-center text-[#363636]" />
        <p className="text-[#363636]"> 09112546369</p>
      </div>
      <div className="w-4/5 mx-auto p-2 mt-5 border border-white rounded-2xl flex items-center justify-center gap-1 ">
        <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5  text-center text-[#fff]" />
        <p className="text-[#fff]"> گفتگو با فروشنده</p>
      </div>
    </div>
  );
};

export default InfoCall;
