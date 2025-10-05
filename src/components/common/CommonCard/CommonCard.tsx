import React, { FC } from "react";
import styles from "./CommonCard.module.css";
import { ArrowLongLeftIcon, StarIcon } from "@heroicons/react/24/solid";
import { BuildingOffice2Icon, MapPinIcon } from "@heroicons/react/24/outline";
import { ICommonCardProps } from "@/types/ICommonCardProps";


const CommonCard: FC<ICommonCardProps> = ({
  showTitle = true,
  showLocation = true,
  showDetails = true,
  showPrice = true,
  showItemNumber = false,
}) => {
  
  return (
    <div className="w-80 flex flex-col  pt-2.5 flex-shrink-0 group">
      <div className="relative flex flex-col gap-7 w-full h-60 bg-[#393939] group-hover:bg-[#8CFF45] rounded-3xl px-6 pt-3 pb-6">
        <div
          className={`${styles.cardShape} w-2/3 h-9 absolute top-0 left-0 bg-[#2D2D2D] rounded-[0_0_40px_0]`}
        >
          <div className="absolute w-11 h-6 bg-[#393939] left-1 top-1 rounded group-hover:bg-[#8CFF45]">
            <ArrowLongLeftIcon className=" w-full h-full text-white group-hover:text-black cursor-pointer" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-1.5 w-16 h-8 bg-white rounded group-hover:bg-[#2D2D2D] ">
          <span className="text-md font-medium text-black group-hover:text-white leading-none mt-1">
            15.3
          </span>
          <StarIcon className="w-4 h-4 text-black group-hover:text-white" />
        </div>

        <div className=" w-full h-36 bg-white rounded-2xl"></div>
      </div>
      <div className="flex flex-col gap-2.5 w-full py-2">
        {showItemNumber && (
          <div className="flex items-center gap-1">
            <h1 className="text-white">اجاره ویلا در گیلان ،</h1>
          
            <span className="h-fit  text-[#AAAAAA]  pt-0.5 ">
             (15 مورد)
            </span>
          </div>
        )}
        {showTitle && (
          <div className="flex items-center justify-between">
            <h1 className="text-white">آپارتمان لوکس زعفرانیه</h1>
            <span className="h-fit bg-[#FF5555] text-white rounded-2xl pt-0.5 px-2">
              %15
            </span>
          </div>
        )}
        {showLocation && (
          <div className="flex items-center gap-1">
            <MapPinIcon className="text-[#AAAAAA] w-5 h-5" />
            <span className="text-xs font-normal text-[#AAAAAA]">
              گیلان ، رشت
            </span>
          </div>
        )}
        {showDetails && (
          <div className="flex items-center gap-1">
            <BuildingOffice2Icon className="text-[#AAAAAA] w-5 h-5" />
            <span className="text-xs font-normal text-[#AAAAAA]">
              2 خوابه ، 2 حمامه ، ظرفیت 6 نفر
            </span>
          </div>
        )}
        {showPrice && (
          <div className="flex items-center justify-around w-full h-8 rounded bg-[#444444] group-hover:bg-[#8CFF45]">
            <span className="relative text-[#AAAAAA] text-sm">
              8.000.000 ت
              <span className="absolute left-0 top-[35%] w-full h-[2px] bg-[#AAAAAA] rotate-[-8deg]"></span>
            </span>
            <div className="w-0.5 h-1/2 bg-white group-hover:bg-black"></div>
            <span className="text-white group-hover:text-black text-sm">
              5.000.000 ت/ هر شب
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommonCard;
