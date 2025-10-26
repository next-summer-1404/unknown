"use client";
import React from "react";
import { UserIcon, WindowIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import GreenArrow from "../../../assets/images/greenArrow.png";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ContainDashboard = () => {
  const percentage = 40;

  return (
    <div className="flex gap-5 w-full h-auto">
      <div className="flex-1 bg-[#393939] rounded-2xl">
        <div className="h-10 flex items-center px-3 gap-2 pt-2">
          <WindowIcon className="w-5 h-5 text-[#AAA]" />
          <p className="text-[#AAA] text-[15px]">آمار درآمدها</p>
        </div>

        <div className="border-t border-dashed border-gray-300 mb-[2px]" />

        <div className="flex flex-col gap-3 px-5 py-4 text-right">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#8CFF45]" />
              <p className="text-[#D1D5DB] text-[15px]">درآمد ماه جاری</p>
            </div>
            <div className="px-3 py-1 rounded-lg bg-[#8CFF45] text-[#000] text-[15px] font-semibold">
              115,000,000 تومان
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 leading-40">
              <span className="w-3 h-3 rounded-full bg-[#BDBDBD]" />
              <p className="text-[#D1D5DB] text-[15px]">درآمد کل</p>
            </div>
            <div className="px-3 py-1 rounded-lg bg-[#D9D9D9] text-[#000] text-[15px] font-semibold">
              195,000,000 تومان
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-[#393939] rounded-2xl px-3 pt-2 pb-4">
        <div className="flex items-center justify-between h-10 mb-2">
          <div className="flex items-center gap-2">
            <UserIcon className="w-5 h-5 text-[#AAA]" />
            <p className="text-[#AAA] text-[15px]">وضعیت پروفایل شما</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <p className="text-[#AAA] text-[15px]">ویرایش</p>
            <Image
              src={GreenArrow}
              width={50}
              height={16}
              alt=""
              className="rotate-0 text-[#AAAA]"
            />
          </div>
        </div>

        <div className="border-t border-dashed border-gray-300 mb-4" />

        <div className="flex gap-4">
          <div className="w-2/3 p-5 rounded-xl">
            <p className="text-3xl text-[#AAA] font-bold">{percentage}%</p>
            <p className="text-sm text-[#AAA] leading-8 mt-2">
              برای اینکه بازدید خوبی داشته باشید، پروفایل شما باید حداقل ۷۰٪
              تکمیل شده باشد.
            </p>
            <p className="text-[#888888] text-[12px] pt-10">
              آخرین تغییرات در ۳ دقیقه پیش
            </p>
          </div>

          {/* نمودار دایره‌ای */}
          <div className="w-1/3  rounded-xl flex items-center justify-center p-4">
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                textColor: "#AAA",
                pathColor: "#00FF66", 
                trailColor: "#555",
                textSize: "24px",
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainDashboard;
