"use client";
import {
  BuildingOffice2Icon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import React, { FC } from "react";
import styles from "./HouseReserve.module.css";
import { IHouses } from "@/types/IHouses";
import auth1 from "../../../assets/images/auth1.png";
import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/24/solid";

interface Props {
  house: IHouses;
  onSelect?: () => void;
  bgColor?: string;
}

const CardReserve: FC<Props> = ({ house, onSelect, bgColor = "#2a2a2a" }) => {
  const originalPrice = parseInt(house.price);
  const discountedPrice = house.discounted_price
    ? parseInt(house.discounted_price)
    : originalPrice;
  const discountPercent = house.discounted_price
    ? Math.round(((originalPrice - discountedPrice) / originalPrice) * 100)
    : 0;

  const mainPhoto =
    house.photos?.[0] && house.photos[0].trim() !== ""
      ? house.photos[0]
      : auth1.src;

  return (
    <>
      {" "}
      <div className="w-full h-40 flex items-center" onClick={onSelect}>
        {/* */}
        <div className="w-3/12 py-1.5">
          <div className="relative flex flex-col gap-7 w-full h-34 bg-[#393939]  rounded-3xl px-3 pt-7 pb-3">
            <div
              className={`${styles.cardShape} w-2/3 h-4 absolute top-0 left-0 rounded-[0_0_40px_0]`}
              style={
                {
                  backgroundColor: bgColor,
                  "--shape-color": bgColor,
                } as CSSWithVars //global.d.ts
              }
            ></div>

            <div className=" w-full h-36 bg-white rounded-2xl overflow-hidden">
              <Image
                src={mainPhoto}
                alt={house.title || "house"}
                height={200}
                width={200}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* */}
        <div className="w-6/12 h-full p-2 flex flex-col justify-between">
          <div className=" rounded-lg bg-[#7569FF] w-20 h-8 flex items-center justify-center gap-1">
            <StarIcon className="w-4 h-4 text-white" />
            <h6 className="text-white text-center pt-1 text-sm">
              {house.rate ?? "بدون امتیاز"}
              {house.rate ? " ستاره" : ""}{" "}
            </h6>
          </div>
          <div className="text-white text-xl font-semibold">{house.title} </div>
          <div className="flex items-center gap-1">
            <MapPinIcon className="w-5 h-5 text-[#AAAAAA]" />
            <h6 className="text-[#AAAAAA] text-sm text-center">آدرس:</h6>
            <p className="text-white text-sm truncate max-w-40">
              {house.address}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <ClockIcon className="w-5 h-5 text-[#AAAAAA]" />
            <h6 className="text-[#AAAAAA] text-center text-sm">مدت زمان:</h6>
            <h6 className="text-white text-sm">
              {house.bookings}
              {house.bookings ? " روز" : ""}
            </h6>
          </div>
        </div>

        {/* */}
        <div className="w-3/12 h-full pb-2 flex flex-col justify-between items-end">
          <div className=" w-full pt-1 flex items-center justify-end gap-2">
            {discountPercent == 1 ? null : (
              <div className="text-[#AAAAAA] flex items-center">
                <h6 className="relative text-sm">
                  {originalPrice.toLocaleString()}
                  <span className="absolute left-0 top-2 w-full h-[1px] bg-[#AAAAAA] rotate-[-5deg]"></span>
                </h6>
                <h6 className="text-sm mr-1">ت</h6>
              </div>
            )}
            {discountPercent == 1 ? null : (
              <div className="w-10 h-7 bg-[#FF5555] rounded-lg p-1">
                <h6 className="text-white text-center text-sm">
                  {discountPercent}%
                </h6>
              </div>
            )}
          </div>

          <p className="text-[#8CFF45] text-center font-semibold text-xl whitespace-nowrap">
            <span>{discountedPrice.toLocaleString()}</span>&nbsp;
            <span>ت</span>
          </p>

          <Link
            href={`/houseReserve/${house.id}`}
            className="w-11/12 h-10 border border-[#8CFF45] rounded-xl hover:bg-[#8CFF45]  flex items-center justify-center gap-1 group"
          >
            <BuildingOffice2Icon className="w-5 h-5 text-[#8CFF45] group-hover:text-[#2a2a2a]" />
            <h6 className="text-[#8CFF45] group-hover:text-[#2a2a2a] text-center text-sm ">بررسی و رزرو هتل</h6>
          </Link>
        </div>
      </div>
      <div className="w-full h-0.5 bg-[#3B3B3B]"></div>
    </>
  );
};

export default CardReserve;
