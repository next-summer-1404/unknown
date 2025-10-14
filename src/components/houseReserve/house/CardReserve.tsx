"use client";
import {
  BuildingOffice2Icon,
  ClockIcon,
  MapPinIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import styles from "./HouseReserve.module.css";
import { IHouses } from "@/types/IHouses";
import auth1 from "../../../assets/images/auth1.png";

interface Props {
  house: IHouses;
}

const CardReserve = ({ house }: Props) => {
  const originalPrice = parseInt(house.price);
  const discountedPrice = house.discounted_price
    ? parseInt(house.discounted_price)
    : originalPrice;
  const discountPercent = house.discounted_price
    ? Math.round(((originalPrice - discountedPrice) / originalPrice) * 100)
    : 0;

  const mainPhoto =
    house.photos && house.photos.length > 0 ? house.photos[0] : auth1.src;

  return (
    <div className="w-full border-b border-[#4E4E4E] flex items-center gap-5">
      {/* */}
      <div className="w-3/12 h-auto">
        <div className="relative w-full rounded-2xl  overflow-hidden">
          <div className="relative bg-[#351cb3] rounded-2xl  min-h-[200px] p-0 overflow-hidden">
            <div
              className={`${styles.cardShape} absolute  top-0 left-0 w-9/12 h-7 z-20 bg-[#2A2A2A] rounded-[0_0_40px_0]`}
            ></div>
            <img
              src={mainPhoto}
              alt={house.title || "house"}
              className="absolute inset-0 w-full h-full object-cover object-center z-10 rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* */}
      <div className="w-6/12 h-auto p-2 flex flex-col ">
        <div className="border rounded-2xl bg-[#7569FF] w-1/3 h-10 flex items-center justify-center gap-1">
          <StarIcon className="w-5 h-5 text-white" />
          <p className="text-white text-center ">
            {house.rate ?? "بدون امتیاز"}
          </p>
        </div>
        <div className="text-white text-xl font-semibold mt-5">
          {house.title}{" "}
        </div>
        <div className="flex items-center gap-1 my-5">
          <MapPinIcon className="w-5 h-5 text-[#AAAAAA]" />
          <p className="text-[#AAAAAA] text-center">آدرس:{house.address}</p>
        </div>
        <div className="flex items-center gap-1 my-4">
          <ClockIcon className="w-5 h-5 text-[#AAAAAA]" />
          <p className="text-[#AAAAAA] text-center">
            {" "}
            مدت رزرو:{house.bookings} رزرو
          </p>
        </div>
      </div>

      {/* */}
      <div className="w-3/12 h-auto">
        <div className=" w-full h-auto flex items-center gap-2 ">
          <div className="w-2/3 h-auto text-[#AAAAAA] flex items-center ">
            <p className="line-through">{originalPrice.toLocaleString()}</p>
            <p className="text-lg">تومان</p>
          </div>

          <div className="w-1/3 h-auto bg-[#FF5555] border rounded-xl p-1 m-1">
            <p className="text-white text-center ">{discountPercent}%</p>
          </div>
        </div>
        <p className="text-[#8CFF45] text-center font-semibold text-2xl mt-8 whitespace-nowrap">
          <span>{discountedPrice.toLocaleString()}</span>&nbsp;
          <span>تومان</span>
        </p>

        <button className="w-full h-10 border border-[#8CFF45] mt-15 rounded-xl hover:bg-[#8CFF45]  flex items-center justify-center gap-1 ">
          <BuildingOffice2Icon className="w-5 h-5 text-[#AAAAAA] " />
          <p className="text-[#AAAAAA] text-center ">بررسی و رزرو هتل</p>
        </button>
      </div>
    </div>
  );
};

export default CardReserve;
