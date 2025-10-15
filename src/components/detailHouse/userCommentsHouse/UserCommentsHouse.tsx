import { ChevronLeftIcon, StarIcon } from "@heroicons/react/24/outline";
import { div } from "framer-motion/client";
import React from "react";

const UserCommentsHouse = () => {
  return (
    <div className="w-full h-[800px] border border-amber-400">
      <div className="w-full h-auto mt-8 flex gap-3">
        <div className="w-1/4 h-auto flex flex-col gap-2">
          <p className="text-sm text-white">نام و نام خانوادگی</p>
          <input
            type="text"
            placeholder="نام"
            className="border border-white rounded-2xl outline-none p-2 placeholder:text-white placeholder:text-sm"
          />
        </div>
        <div className="w-1/4 h-auto flex flex-col gap-2">
          <p className="text-sm text-white">ایمیل شما:</p>
          <input
            type="text"
            placeholder="نام"
            className="border border-white rounded-2xl outline-none p-2 placeholder:text-white placeholder:text-sm"
          />
        </div>
        {/* بخش امتیاز شما */}
        <div className="w-2/4 h-auto flex flex-col gap-2">
          <p className="text-sm text-white whitespace-nowrap"> امتیاز شما:</p>
          <div className="flex items-center gap-1 text-white p-2 rounded-2xl text-sm border border-white">
            <div className="flex-1 h-2 mx-3 bg-[#444] rounded-full relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#6A5ACD] to-[#9B84F8] rounded-full w-[80%]" />
            </div>
            <span>۴.۵</span>
            <StarIcon className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
      <div className="border-b border-white w-full h-auto mt-10 pb-10  flex gap-5">
        <div className="w-3/4 h-auto ">
          <p className="text-white text-md">پیام شما:</p>
          <input
            type="text"
            placeholder="نظر خود را وارد کنید..."
            className="w-full h-auto border border-[#AAAAAA] rounded-2xl p-2 outline-none mt-2 placeholder:text-white placeholder:text-sm"
          />
        </div>
        <div className="w-1/4  flex items-center justify-center mt-8 bg-[#8CFF45] rounded-2xl">
          <button className=" text-[#363636] ">ارسال نظر</button>
          <ChevronLeftIcon className="w-5 h-5"/>
        </div>
      </div>
    </div>
  );
};

export default UserCommentsHouse;
