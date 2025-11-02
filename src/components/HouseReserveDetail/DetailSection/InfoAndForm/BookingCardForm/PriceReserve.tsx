import { IHouses } from "@/types/IHouses";
import { CurrencyDollarIcon, StarIcon } from "@heroicons/react/24/outline";
import React from "react";
import AcceptPrice from "./AcceptPrice";

interface PriceReserveProps {
    house: IHouses;
}

const PriceReserve = ({ house }: PriceReserveProps) => {
  

  return (
    <div>
      <h3 className="font-semibold flex items-center gap-2 mb-4 bg-[#565656] justify-center rounded-b-full  w-1/2 m-auto ">
        <CurrencyDollarIcon className="w-5 h-5 text-white" />
        <p className="text-center leading-12"> قیمت های رزرو</p>
      </h3>
      {/* */}
      <div className="w-5/6 m-auto h-auto border-b-1 border-[#646464]  p-3 grid grid-rows-3 gap-2">
        <div className="grid grid-cols-[20px_auto] items-center gap-2">
          <StarIcon className="w-4 h-4 text-[#AAAAAA]" />
          <p className="text-[#AAAAAA]">{house.discounted_price ? house.discounted_price : 0} تومان</p>
        </div>

        <div className="grid grid-cols-[20px_auto] items-center gap-2">
          <StarIcon className="w-4 h-4 text-[#AAAAAA]" />
          <p className="text-[#AAAAAA]">{house.price} تومان</p>
        </div>

        <div className="grid grid-cols-[20px_auto] items-center gap-2">
          <StarIcon className="w-4 h-4 text-[#AAAAAA]" />
          <p className="text-[#AAAAAA]"> {house.price} تومان </p>
        </div>
      </div>
      {/* */}
      <div className="w-5/6 m-auto h-auto flex my-5 ">
        <div className="w-1/2 h-auto"></div>
        <div className="w-1/2 h-auto  flex gap-3 items-center">
          <div className="flex items-center gap-1 ">
            <p className="line-through text-[#AAAAAA] text-md">{house.price}</p>
            <p className="text-md text-[#AAAAAA]">تومان</p>
          </div>
          <div className="w-1/4 h-auto bg-[#FF5555]  rounded-lg px-2 ">
            <p className="text-white text-center ">15%</p>
          </div>
        </div>
      </div>
      <p className="text-[#8CFF45] text-3xl  mr-56 pb-10">{house.discounted_price ? house.discounted_price : 0} تومان</p>
      
      <AcceptPrice houseId={house.id} />
    </div>
  );
};

export default PriceReserve;
