"use client";

import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { ArrowPathIcon } from "@heroicons/react/16/solid";
import { UsersIcon } from "@heroicons/react/24/outline";
// import { ArrowPathIcon } from "@heroicons/react/24/Micro";
import Link from "next/link";
import React from "react";

const BookerInfoForm = () => {
  return (
    <div className="h-fit py-2 px-2 bg-[#393939] rounded-2xl ">
      <div className="flex item justify-between p-2 rounded-2xl bg-[#4D4D4D] ">
        <div className="flex gap-1 items-center">
          <UsersIcon className="w-5 h-5 mr-2 text-[#FFFFFF]" />
          <h3 className="text-[#FFFFFF]">مشخصات مسافران</h3>
        </div>
        <Link href={"/"} className="flex gap-1 items-center text-[#8CFF45]">
          <ArrowPathIcon className="w-5 h-5 text-[#8CFF45]" />
          <h3 className=" text-xs">انتخاب مسافران سابق</h3>
        </Link>
      </div>

      <div className=" flex flex-col gap-1.5 w-full px-2 py-4 border-b-1 border-dashed border-[#AAAAAA]">
        <div className="w-full h-20 flex items-center justify-between">
          <div className="w-[19%] relative">
            <label
              htmlFor="username"
              className="absolute right-3 -top-2 bg-[#393939] px-1 text-[#AAAAAA] text-sm"
            >
              نام شما:
            </label>
            <input
              type="text"
              placeholder="وارد کنید..."
              className="w-full border border-[#AAAAAA] text-[#aaaaaa] rounded-xl h-full px-3 py-3 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="w-[19%] relative">
            <label
              htmlFor="username"
              className="absolute right-3 -top-2 bg-[#393939] px-1 text-[#aaaaaa] text-sm"
            >
              نام خانوادگی:
            </label>
            <input
              type="text"
              placeholder="وارد کنید..."
              className="w-full border border-[#aaaaaa] text-[#aaaaaa] rounded-xl h-FULL px-3 py-3 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="w-[19%] relative">
            <label
              htmlFor="username"
              className="absolute right-3 -top-2 bg-[#393939] px-1 text-[#aaaaaa] text-sm"
            >
              جنسیت شما:
            </label>
            <select
              id="username"
              className=" w-full border border-[#aaaaaa] text-[#aaaaaa] rounded-xl h-FULL px-3 py-3 focus:border-blue-500 focus:outline-none"
            >
              <option value="text-[#aaaaaa]">استان، شهر، اقامتگاه...</option>
              {/* {locations.map((loc) => (
                <option
                  key={loc.id}
                  value={loc.area_name}
                  className="cursor-pointer"
                >
                  {loc.area_name}
                </option>
              ))} */}
            </select>
          </div>{" "}
          <div className="w-[19%] relative">
            <label
              htmlFor="username"
              className="absolute right-3 -top-2 bg-[#393939] px-1 text-[#aaaaaa] text-sm"
            >
              کدملی:
            </label>
            <input
              type="text"
              placeholder="وارد کنید..."
              className="w-full border border-[#aaaaaa] text-[#aaaaaa] rounded-xl h-FULL px-3 py-3 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="w-[19%] relative">
            <label
              htmlFor="username"
              className="absolute right-3 -top-2 bg-[#393939] px-1 text-[#aaaaaa] text-sm"
            >
              تاریخ تولد:
            </label>

            <DatePicker
              calendar={persian}
              locale={persian_fa}
              placeholder="وارد کنید..."
              // value={startDate}

              inputClass="w-full border border-[#aaaaaa] text-[#aaaaaa] rounded-xl h-FULL px-3 py-3 focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>
        
      </div>
      {/* <div className="w-full flex items-center justify-end bg-white px-2 py-4">
        <div className="h-9 w-20 bg-red-400"> </div><div className="h-9 w-20 bg-red-400"></div>
      </div> */}
        {/* در حال تکمیل است */}
    </div>
  );
};

export default BookerInfoForm;
