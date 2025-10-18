import { CurrencyDollarIcon, StarIcon } from "@heroicons/react/24/outline";
import { Button } from "@heroui/react";
import React from "react";

const PriceReserve = () => {
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
          <p className="text-[#AAAAAA]">۵ شب × ۱۷,۰۰۰,۰۰۰ ت</p>
        </div>

        <div className="grid grid-cols-[20px_auto] items-center gap-2">
          <StarIcon className="w-4 h-4 text-[#AAAAAA]" />
          <p className="text-[#AAAAAA]">۵ شب × ۱۲,۰۰۰,۰۰۰ ت</p>
        </div>

        <div className="grid grid-cols-[20px_auto] items-center gap-2">
          <StarIcon className="w-4 h-4 text-[#AAAAAA]" />
          <p className="text-[#AAAAAA]">۵ شب × ۹,۵۰۰,۰۰۰ ت</p>
        </div>
      </div>
      {/* */}
      <div className="w-5/6 m-auto h-auto flex my-5 ">
        <div className="w-1/2 h-auto"></div>
        <div className="w-1/2 h-auto  flex gap-10 items-center">
          <div className="flex items-center gap-1 ">
            <p className="line-through text-[#AAAAAA] text-md">250000</p>
            <p className="text-md text-[#AAAAAA]">تومان</p>
          </div>
          <div className="w-1/4 h-auto bg-[#FF5555]  rounded-lg  ">
            <p className="text-white text-center ">15%</p>
          </div>
        </div>
      </div>
      <p className="text-[#8CFF45] text-3xl  mr-56 pb-10">1500000 تومان</p>

      <div className="flex items-center justify-center">
        <Button className="bg-[#8CFF45]  font-bold  rounded-xl w-2/3 m-auto mb-5">
          <p className="text-[#363636] text-lg">همین الان رزرو کن</p>
        </Button>
      </div>
    </div>
  );
};

export default PriceReserve;
