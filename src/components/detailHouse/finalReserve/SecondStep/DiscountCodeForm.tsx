import { CheckCircleIcon, PercentBadgeIcon } from "@heroicons/react/24/outline";
import React from "react";

const DiscountSecondReserve = () => {
  return (
    <div className="w-full flex flex-col  gap-3 px-2 py-2  bg-[#393939] rounded-2xl">
      <div className="w-full flex items-center gap-1.5 p-2 rounded-2xl bg-[#4D4D4D]">
        <PercentBadgeIcon className="w-5 h-5 mr-2 text-[#FFFFFF]" />
        <p className="text-[#FFFFFF]"> کد تخفیف</p>
      </div>
      <form className=" w-full h-auto flex mt-5">
        <div className=" w-1/4 flex flex-col justify-center">
          <label htmlFor="code" className="mr-4 text-[#AAAAAA]">
            کد تخفیف
          </label>
          <input
            id="code"
            name="code"
            type="text"
            placeholder="وارد کنید..."
            className="border border-[#AAAAAA] text-[#AAAAAA] outline-none p-2 rounded-2xl bg-transparent mr-2"
          />
        </div>
        <div className="w-1/2 mr-5">
          <button className="flex items-center border border-[#8CFF45] rounded-xl p-1 gap-2 mt-7">
            <CheckCircleIcon className="w-5 h-5 text-[#8CFF45]" />
            <p className="text-[#8CFF45] text-sm"> اعمال تخفیف</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default DiscountSecondReserve;
