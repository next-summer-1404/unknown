import { MegaphoneIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";

const TravelerContactInfo = () => {
  return (
    <div className="w-full flex flex-col  gap-3 px-2 py-2  bg-[#393939] rounded-2xl">
      <div className="w-full flex items-center gap-1.5 p-2 rounded-2xl bg-[#4D4D4D]">
        <MegaphoneIcon className="w-5 h-5 mr-2 text-[#FFFFFF]" />
        <p className="text-[#FFFFFF]"> اطلاع رسانی سفر</p>
        <span className="text-sm text-[#8CFF45]">
          ( اطلاعات بلیط و اطلاع رسانی بعدی به این آدرس ارسال می شود . )
        </span>
      </div>
      <div className="flex items-center gap-2 pr-0.5">
        <div className="flex items-center">
          <StarIcon className="w-3 h-3 text-white"/>
          <h3 className="text-white p-2">
            شماره تماس : <span className="text-[#8CFF45]">09112540000</span>
          </h3>
        </div>
        <div className="w-0.5 h-4 bg-[#DDDDDD]"></div>
        <div className="flex items-center">
          <StarIcon className="w-3 h-3 text-white"/>
          <h3 className="text-white p-2 ">
            ایمیل: <span className="text-[#8CFF45]">Example@gmail.com</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TravelerContactInfo;
