import {
  BuildingOffice2Icon,
  ClockIcon,
  MapPinIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import styles from "./HouseReserve.module.css";
import { HouseReserveTypes } from "@/types/HouseReserveTypes";

interface Props {
  house: HouseReserveTypes[];
}
const CardReserve = ({ house }: Props) => {
  const originalPrice = parseInt(house.price);
  const discountedPrice = house.discounted_price
    ? parseInt(house.discounted_price)
    : originalPrice;
  const discountPercent = house.discounted_price
    ? Math.round(((originalPrice - discountedPrice) / originalPrice) * 100)
    : 0;

  return (
    <div className="w-full h-11/12">
      <div className="w-full m-auto border-b border-[#4E4E4E] h-60 flex items-center gap-5">
        {/* */}

        <div className="w-3/12 h-auto">
          <div className="relative bg-[#351cb3] rounded-2xl min-h-50 p-4 w-full h-auto">
            <div
              className={`${styles.cardShape} w-9/12 h-7 absolute top-0 left-0 z-50 bg-[#2A2A2A] rounded-[0_0_40px_0]`}
            ></div>
            {/* <div className="relative rounded-2xl bg-[#b44343] h-full overflow-hidden pt-7 flex items-center justify-center">
                <span className="text-gray-400">تصویر هتل</span>
              </div> */}
          </div>
        </div>

        {/* */}
        <div className="w-6/12 h-auto p-2 flex flex-col ">
          <div className="border rounded-2xl bg-[#7569FF] w-1/3 h-10 flex items-center justify-center gap-1">
            <StarIcon className="w-5 h-5 text-white" />
            <p className="text-white text-center ">{house.rate ?? "بدون امتیاز"}</p>
          </div>
          <div className="text-white text-xl font-semibold mt-5">{house.title}  </div>
          <div className="flex items-center gap-1 my-5">
            <MapPinIcon className="w-5 h-5 text-[#AAAAAA]" />
            <p className="text-[#AAAAAA] text-center">آدرس:{house.address}</p>
          </div>
          <div className="flex items-center gap-1 my-4">
            <ClockIcon className="w-5 h-5 text-[#AAAAAA]" />
            <p className="text-[#AAAAAA] text-center"> مدت زمان:{house.bookings} رزرو</p>
          </div>
        </div>

        {/* */}
        <div className="w-3/12 h-auto">
          <div className=" w-full h-auto flex items-center ">
            <div className="w-2/3 h-auto text-[#AAAAAA]">
              <span className="line-through">{originalPrice.toLocaleString()}</span>
              <span className="text-[#AAAAAA]">تومان</span>
            </div>
            <div className="w-1/3 h-auto bg-[#FF5555] border rounded-xl p-1">
              <p className="text-white text-center ">{discountPercent}%</p>
            </div>
          </div>

          <p className="text-[#8CFF45] text-center font-semibold text-2xl mt-8">
            {discountedPrice.toLocaleString()}{" "}
            <span className="text-[#8CFF45] text-center font-semibold">
              تومان
            </span>
          </p>
          <button className="w-full h-10 border border-[#8CFF45] mt-15 rounded-xl hover:bg-[#8CFF45]  flex items-center justify-center gap-1 ">
            <BuildingOffice2Icon className="w-5 h-5 text-[#AAAAAA] " />
            <p className="text-[#AAAAAA] text-center ">بررسی و رزرو هتل</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardReserve;
