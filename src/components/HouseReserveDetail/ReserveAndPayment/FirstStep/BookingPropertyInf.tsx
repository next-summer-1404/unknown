"use client";

import {
  BuildingOfficeIcon,
  CalendarDaysIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import file from "../../../../assets/images/auth1.png";
import { StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useBookingStore } from "@/store/useBookingStore";
import { DateTimeChange } from "@/utils/helper/DateTimeChange";
import { getHouseDetail } from "@/utils/service/api/getHouseDetail";
import { IHouses } from "@/types/IHouses";
interface FirstStepProps {
  id: string;
}

const BookingPropertyInf: FC<FirstStepProps> = ({ id }) => {
  const [house, setHouse] = useState<IHouses>();

  const reservedDates = useBookingStore((state) => state.reservedDates);
  const startDisplay = reservedDates[0] || "--";
  const endDisplay = reservedDates[1] || "--";

  console.log(house);

  const GetHouseInfo = async () => {
    try {
      const result = await getHouseDetail(id);
      setHouse(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetHouseInfo();
  }, []);


  const imageSrc = (() => {
  const pic = Array.isArray(house?.photos) ? house?.photos[0] : house?.photos;
  return typeof pic === "string" && pic.trim() !== "" && /^(https?:\/\/|\/|data:image\/)/i.test(pic.trim()) ? pic : file;
})();

  return (
    <div className="lg:h-36 flex items-center px-2 py-2 bg-[#393939] rounded-2xl text-center text-white">
      <div className="w-[41%] py-1 h-full flex ">
        <Image
          src={imageSrc}
          alt=""
          width={200}
          height={200}
          className="w-[37%] h-full rounded-2xl"
        />
        <div className="flex-1 flex flex-col justify-between pr-2">
          <div className="w-19 h-8 rounded-xl bg-[#7569FF] flex items-center gap-1">
            <StarIcon className="w-5 h-5" />
            <span className="mt-1 text-[14px]"> {house?.rate}ستاره</span>
          </div>
          <h3 className="text-right text-lg font-bold">{house?.title}</h3>
          <div className="flex w-full">
            <MapPinIcon className="w-5 h-5" />
            <span className="text-sm">آدرس:</span>
            <p className="text-sm text-[#AAAAAA] font-light mr-0.5 truncate ">
              {house?.address}{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="h-10/12 w-0.5 bg-[#565656]"></div>
      <div className="w-[28%] flex flex-col  justify-center items-center gap-5 h-full">
        <div className="w-full flex items-center justify-center gap-1">
          <CalendarDaysIcon className="w-5 h-5 text-[#AAAAAA]" />
          <span className="text-[#AAAAAA] font-light text-sm">تاریخ ورود:</span>
          <span className="text-[#8CFF45] text-xs">
            {DateTimeChange(startDisplay)}
          </span>
        </div>
        <div className="w-full flex items-center justify-center gap-1">
          <CalendarDaysIcon className="w-5 h-5 text-[#AAAAAA]" />
          <span className="text-[#AAAAAA] font-light text-sm">تاریخ خروج:</span>
          <span className="text-[#8CFF45] text-xs">
            {DateTimeChange(endDisplay)}
          </span>
        </div>
      </div>
      <div className="h-10/12 w-0.5 bg-[#565656]"></div>
      <div className="w-[30%] h-full flex flex-col items-end justify-center gap-4">
        <div className=" flex items-center gap-3">
          <div className="flex items-center justify-center gap-1">
            <span className="relative text-[#AAAAAA] text-sm">
              25000000
              <span className="absolute left-0 top-[35%] w-full h-[2px] bg-[#AAAAAA] rotate-[-10deg]"></span>
            </span>
            <div className="w-12 h-6 rounded-xl bg-red-400 flex items-center justify-center pt-1">
              <h6 className="text-[14px]">32%</h6>
            </div>
          </div>
          <h5 className="text-[#8CFF45] text-xl">{house?.price} تومان</h5>
        </div>
        <Link
          href={"/"}
          className="flex items-center justify-center gap-2 p-2 border h-9 w-30 rounded-xl border-[#8CFF45] cursor-pointer"
        >
          <BuildingOfficeIcon className="w-5 h-5 text-[#8CFF45]" />
          <button className="text-[#8CFF45] text-sm text-center">
            تغییر هتل
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookingPropertyInf;
