"use client";

import { BuildingOfficeIcon, CalendarDaysIcon, MapPinIcon, StarIcon } from '@heroicons/react/24/outline'
import React from 'react'

const BookingPropertyInf = () => {
  return (
    <div className="w-11/12 mx-auto mt-10 h-40 bg-[#393939]  rounded-2xl  text-center text-white flex">
        <div className="w-1/3 flex">
          <div className="w-1/3 border border-red-700 rounded-2xl h-30 mt-5 mr-3"></div>
          <div className="w-2/3">
            <div className="w-18 h-8 rounded-2xl mr-5 bg-[#7569FF] flex items-center gap-1 mt-3 p-1">
              <StarIcon className="w-5 h-5" />
              <p>ستاره</p>
            </div>
            <p className="text-right text-xl leading-14 mr-5 font-semibold">
              هتل سراوان رانین رشت
            </p>
            <div className="flex items-center">
              <MapPinIcon className="w-5 h-5 mr-3" />
              <p className="text-sm text-[#AAAAAA] font-light">
                آدرس : گیلان ، رشت ، میدان آزادی ....
              </p>
            </div>
          </div>
        </div>
            <div className="w-1/3 h-30 my-auto border-l border-r border-[AAAAAA">
        <div className="w-full p-2  flex items-center gap-1 mt-5">
            <CalendarDaysIcon className="w-5 h-5 text-[#AAAAAA]"/>
            <p className="text-[#AAAAAA] font-light text-sm">تاریخ ورود:</p>
        </div>
        <div className="w-full p-2  flex items-center gap-1">
            <CalendarDaysIcon className="w-5 h-5 text-[#AAAAAA]"/>
            <p className="text-[#AAAAAA] font-light text-sm">تاریخ خروج:</p>
        </div>
        </div>
        <div className="w-1/3 ">
          <div className=" mt-10 flex items-center gap-5 mr-15">
            <p className="text-[#AAAAAA]  line-through">25000000</p>
            <p className="px-3 py-1 rounded-xl bg-red-400 text-sm ">32%</p>
            <p className="text-[#8CFF45]">15000000 تومان</p>
          </div>
          <div className="border h-10 mr-60 rounded-2xl border-[#8CFF45] ml-5 mt-5 flex items-center gap-1 p-2 justify-center">
            <BuildingOfficeIcon className="w-5 h-5 text-[#8CFF45]"/>
            <button className="text-[#8CFF45] text-sm text-center">تغییر هتل</button>
          </div>
        </div>
      </div>
  )
}

export default BookingPropertyInf
