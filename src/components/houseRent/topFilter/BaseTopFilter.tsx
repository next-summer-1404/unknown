"use client";
import React from "react";
import {
  BuildingOffice2Icon,
  CurrencyDollarIcon,
  MapPinIcon,
  MagnifyingGlassIcon,
  BarsArrowUpIcon,
} from "@heroicons/react/24/outline";


const BaseTopFilter = () => {
  return (
    <div>
      {/* ===== باکس فیلتر ===== */}
      <div className="w-11/12 mx-auto bg-[#303030] rounded-2xl border border-[#303030] p-5 mt-20">
        <div className="flex flex-wrap items-center justify-between gap-3 text-[#AAAAAA]">
          {/* محل مورد نظر */}
          <div className="flex items-center gap-2 bg-[#2a2a2a] border border-[#AAAAAA] rounded-xl px-4 py-2">
            <MapPinIcon className="w-5 h-5 text-[#AAAAAA]" />
            <select className="bg-[#2a2a2a] outline-none text-sm">
              <option>استان ، شهر</option>
            </select>
          </div>

          {/* نوع ملک */}
          <div className="flex items-center gap-2 bg-[#2a2a2a] border border-[#AAAAAA] rounded-xl px-4 py-2">
            <BuildingOffice2Icon className="w-5 h-5 text-[#AAAAAA]" />
            <select className="bg-[#2a2a2a] outline-none text-sm">
              <option>آپارتمان</option>
              <option>ویلا</option>
              <option>سوئیت</option>
            </select>
          </div>

          {/* نوع معامله */}
          <div className="flex items-center gap-2 bg-[#2a2a2a] border border-[#AAAAAA] rounded-xl px-4 py-2">
            <CurrencyDollarIcon className="w-5 h-5 text-[#AAAAAA]" />
            <select className="bg-[#2a2a2a] outline-none text-sm">
              <option>رهن و اجاره</option>
              <option>خرید و فروش</option>
            </select>
          </div>

          {/* مرتب‌سازی */}
          <div className="flex items-center gap-2 bg-[#2a2a2a] border border-[#AAAAAA] rounded-xl px-4 py-2">
            <BarsArrowUpIcon className="w-5 h-5 text-[#AAAAAA]" />
            <select className="bg-[#2a2a2a] outline-none text-sm">
              <option>جدیدترین آگهی‌ها</option>
              <option>ارزان‌ترین</option>
              <option>گران‌ترین</option>
            </select>
          </div>

          {/* فیلد جستجو */}
          <div className="flex items-center gap-2 bg-[#2a2a2a] border border-[#AAAAAA] rounded-xl px-4 py-2 flex-1 min-w-[200px]">
            <MagnifyingGlassIcon className="w-5 h-5 text-[#AAAAAA]" />
            <input
              type="text"
              placeholder="نام هتل مورد نظر..."
              className="bg-transparent outline-none text-sm w-full placeholder-[#AAAAAA"
            />
          </div>

          {/* تعداد آگهی */}
          <div className="text-[#AAAAAA] text-sm whitespace-nowrap">
            تعداد آگهی: <span className="text-[#AAAAAA] font-mediu">۳۳</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseTopFilter;
