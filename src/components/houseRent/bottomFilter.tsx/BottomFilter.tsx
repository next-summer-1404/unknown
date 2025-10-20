"use client";
import React from "react";

const BottomFilter = () => {
  return (
    <div className="w-11/12 mx-auto  mt-5">
      {/* باکس قرمز اصلی */}
      <div className="w-9/12  p-5 h-auto flex  items-center  gap-2 ">

        {/* حداقل متراژ */}
        <div className="flex items-center gap-2 border border-[#dadada52] rounded-full px-1 py-2 bg-[#232323] text-gray-200 shrink-0">
          <label className="text-gray-300 whitespace-nowrap text-xs sm:text-sm">
            حداقل متراژ:
          </label>
          <input
            type="number"
            placeholder="0"
            className="w-14 bg-transparent outline-none text-center text-gray-100 text-sm"

            
          />
          <span className="text-gray-400 whitespace-nowrap text-xs sm:text-sm">
            متر
          </span>
        </div>

        {/* حداکثر متراژ */}
        <div className="flex items-center gap-2 border border-[#dadada52] rounded-full px-1 py-2 bg-[#232323] text-gray-200 shrink-0">
          <label className="text-gray-300 whitespace-nowrap text-xs sm:text-sm">
            حداکثر متراژ:
          </label>
          <input
            type="number"
            placeholder="0"
            className="w-14 bg-transparent outline-none text-center text-gray-100 text-sm"
          />
          <span className="text-gray-400 whitespace-nowrap text-xs sm:text-sm">
            متر
          </span>
        </div>

        {/* جداکننده */}
        <span className="text-gray-400">|</span>

        {/* حداقل اجاره */}
        <div className="flex items-center gap-2 border border-[#dadada52] rounded-full px-1 py-2 bg-[#232323] text-gray-200 shrink-0">
          <label className="text-gray-300 whitespace-nowrap text-xs sm:text-sm">
            حداقل اجاره:
          </label>
          <input
            type="number"
            placeholder="0"
            className="w-20 bg-transparent outline-none text-center text-gray-100 text-sm"
          />
          <span className="text-gray-400 whitespace-nowrap text-xs sm:text-sm">
            تومان
          </span>
        </div>

        {/* حداکثر اجاره */}
        <div className="flex items-center gap-2 border border-[#dadada52] rounded-full px-1 py-2 bg-[#232323] text-gray-200 shrink-0">
          <label className="text-gray-300 whitespace-nowrap text-xs sm:text-sm">
            حداکثر اجاره:
          </label>
          <input
            type="number"
            placeholder="0"
            className="w-20 bg-transparent outline-none text-center text-gray-100 text-sm"
          />
          <span className="text-gray-400 whitespace-nowrap text-xs sm:text-sm">
            تومان
          </span>
        </div>

        {/* جداکننده */}
        <span className="text-gray-400">|</span>

        {/* حداقل رهن */}
        <div className="flex items-center gap-2 border border-[#dadada52] rounded-full px-1 py-2 bg-[#232323] text-gray-200 shrink-0">
          <label className="text-gray-300 whitespace-nowrap text-xs sm:text-sm">
            حداقل رهن:
          </label>
          <input
            type="number"
            placeholder="0"
            className="w-20 bg-transparent outline-none text-center text-gray-100 text-sm"
          />
          <span className="text-gray-400 whitespace-nowrap text-xs sm:text-sm">
            تومان
          </span>
        </div>

        {/* حداکثر رهن */}
        <div className="flex items-center gap-2 border border-[#dadada52] rounded-full px-1 py-2 bg-[#232323] text-gray-200 shrink-0">
          <label className="text-gray-300 whitespace-nowrap text-xs sm:text-sm">
            حداکثر رهن:
          </label>
          <input
            type="number"
            placeholder="0"
            className="w-20 bg-transparent outline-none text-center text-gray-100 text-sm"
          />
          <span className="text-gray-400 whitespace-nowrap text-xs sm:text-sm">
            تومان
          </span>
        </div>
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
