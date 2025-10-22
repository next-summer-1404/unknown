import { MegaphoneIcon } from "@heroicons/react/24/outline";
import React from "react";

const DiscountCodeForm = () => {
  return (
    <div className="w-11/12 mx-auto my-10 h-auto  bg-[#393939]  rounded-2xl ">
      <div className="p-2 rounded-2xl bg-[#4D4D4D] flex gap-1 items-center">
        <MegaphoneIcon className="w-5 h-5 mr-2 text-[#FFFFFF]" />
        <p className="text-[#FFFFFF]"> اطلاع رسانی سفر</p>
        <span className="text-sm text-[#8CFF45]">
          ( اطلاعات بلیط و اطلاع رسانی بعدی به این آدرس ارسال می شود . )
        </span>
      </div>
      <div className="w-2/5 h-auto p-3 flex items-center">
        <div className=" w-1/2 h-auto flex items-center">
            <p className="text-white p-2">شماره تماس : <span className="text-[#8CFF45]">09112540000</span></p>
        </div>
         <div className="border-r border-white w-1/2 h-auto flex items-center">
            <p className="text-white p-2 mr-5">ایمیل: <span className="text-[#8CFF45]">Example@gmail.com</span></p>
        </div>
      </div>
    </div>
  );
};

export default DiscountCodeForm;
