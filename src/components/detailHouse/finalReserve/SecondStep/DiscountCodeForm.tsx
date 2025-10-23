import { CheckCircleIcon, PercentBadgeIcon } from "@heroicons/react/24/outline";
import React from "react";

const DiscountCodeForm = () => {
  return (
    <div className="w-full flex flex-col  gap-3 px-2 py-2  bg-[#393939] rounded-2xl">
      <div className="w-full flex items-center gap-1.5 p-2 rounded-2xl bg-[#4D4D4D]">
        <PercentBadgeIcon className="w-5 h-5 mr-2 text-[#FFFFFF]" />
        <p className="text-[#FFFFFF]"> کد تخفیف</p>
      </div>
      <form className=" w-full py-3 px-3 flex items-center gap-6">
        <div className="w-1/4 relative">
          <label
            htmlFor="code"
            className="absolute right-3 -top-2 bg-[#393939] px-1 text-[#AAAAAA] text-sm"
          >
            کد تخفیف:
          </label>
          <input
            id="code"
            name="code"
            type="text"
            placeholder="وارد کنید..."
            className="w-full border border-[#AAAAAA] text-[#aaaaaa] rounded-xl h-10 px-3 py-1 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="w-1/2">
          <button className="flex items-center border border-[#8CFF45] rounded-xl p-1 gap-2 cursor-pointer">
            <CheckCircleIcon className="w-5 h-5 text-[#8CFF45]" />
            <p className="text-[#8CFF45] text-sm"> اعمال تخفیف</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default DiscountCodeForm;
