"use client";

import { useState } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { Slider } from "@heroui/react";

const UserComment = () => {
  const [value, SetValue] = useState(0);
  return (
    <>
      <form action="" className="">
        <div className="w-full flex justify-between gap-2">
          <div className="w-[23%] h-12 relative">
            <label
              htmlFor="username"
              className="absolute right-3 -top-2 bg-[#232323] px-1 text-[#AAAAAA] text-sm"
            >
              نام و نام خانوادگی:
            </label>
            <input
              type="text"
              placeholder="وارد کنید..."
              className="w-full border border-[#AAAAAA] text-[#aaaaaa] rounded-xl h-full px-3 py-3 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="w-[23%] h-12 relative">
            <label
              htmlFor="username"
              className="absolute right-3 -top-2 bg-[#232323] px-1 text-[#AAAAAA] text-sm"
            >
              ایمیل شما:
            </label>
            <input
              type="text"
              placeholder="وارد کنید..."
              className="w-full border border-[#AAAAAA] text-[#aaaaaa] rounded-xl h-full px-3 py-3 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="w-[50%] h-12 relative flex justify-between items-center gap-3.5 px-2 border border-[#AAAAAA] text-[#aaaaaa] rounded-xl ">
            <label
              htmlFor="username"
              className="absolute right-3 -top-3 bg-[#232323] px-1 text-[#AAAAAA] text-sm "
            >
              امتیاز شما:
            </label>
            <Slider
              id="slider"
              aria-label="Value"
              className={`flex-1 cursor-pointer`}
              minValue={0}
              maxValue={6}
              step={0.5}
              value={value}
              onChange={(val: number | number[]) => {
                if (Array.isArray(val)) {
                  SetValue(val[0]);
                } else {
                  SetValue(val);
                }
              }}
              radius="md"
            />

            <div className="flex justify-center items-center gap-1.5">
              <span className="w-4 h-4">{value}</span>
              <StarIconSolid className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="w-full py-10 flex items-end gap-5">
          <div className="flex-1 h-12 relative">
            <label
              htmlFor="username"
              className="absolute right-3 -top-2 bg-[#232323] px-1 text-[#AAAAAA] text-sm"
            >
              پیام شما:
            </label>
            <input
              type="text"
              placeholder="وارد کنید..."
              className="w-full border border-[#AAAAAA] text-[#aaaaaa] rounded-xl h-full px-3 py-3 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <button className="w-[20%] h-9 flex items-center justify-center gap-5 bg-[#8CFF45] rounded-xl cursor-pointer text-[#363636] shadow-[0px_8px_16px_0px_#8CFF4514]">
            <h4 className="">ارسال نظر</h4>
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
        </div>
      </form>
    </>
  );
};

export default UserComment;
