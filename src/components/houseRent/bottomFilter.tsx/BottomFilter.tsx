"use client";
import React from "react";
import MinArea from "./MinArea";
import MaxArea from "./MaxArea";
import MinRent from "./MinRent";
import MaxRent from "./MaxRent";
import MinMortgage from "./MinMortgage";
import MaxMortgage from "./MaxMortgage";

const BottomFilter = () => {
  return (
    <div className="w-11/12 mx-auto  mt-5">
      <div className="w-9/12  p-5 h-auto flex  items-center  gap-2 ">
        {/* حداقل متراژ */}
        <MinArea />

        {/* حداکثر متراژ */}
        <MaxArea />
        {/* جداکننده */}
        <span className="text-gray-400">|</span>

        {/* حداقل اجاره */}
        <MinRent />

        {/* حداکثر اجاره */}
        <MaxRent />

        {/* جداکننده */}
        <span className="text-gray-400">|</span>

        {/* حداقل رهن */}
        <MinMortgage />

        {/* حداکثر رهن */}
        <MaxMortgage />
      </div>
      {/* استایل جهانی برای حذف دکمه‌های عددی */}
      <style jsx global>{`
        /* Chrome, Safari, Edge, Opera */
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        /* Firefox */
        input[type="number"] {
          -moz-appearance: textfield;
          appearance: textfield;
        }
      `}</style>
    </div>
  );
};

export default BottomFilter;
