"use client";
import React from "react";
import {
  BuildingOffice2Icon,
  CurrencyDollarIcon,
  MapPinIcon,
  MagnifyingGlassIcon,
  BarsArrowUpIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const steps = [
  { label: "انتخاب هتل", active: true },
  { label: "مشخصات مسافران", active: false },
  { label: "تایید اطلاعات", active: false },
  { label: "پرداخت آنلاین", active: false },
  { label: "صدور بلیط", active: false },
];

const BaseTopFilter = () => {
  return (
    <div>
      {/* ===== نوار مراحل ===== */}
      <div className="flex items-center justify-center gap-5 text-sm text-gray-300 mb-10">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className={`flex items-center justify-center w-9 h-9 rounded-full border-2 transition-colors duration-300 ${
                step.active
                  ? "border-[#8CFF45] bg-[#8CFF45]/10 text-[#8CFF45]"
                  : "border-gray-600 text-gray-400"
              }`}
            >
              {step.active ? (
                <CheckCircleIcon className="w-5 h-5" />
              ) : (
                index + 1
              )}
            </div>
            <span
              className={`${
                step.active ? "text-[#8CFF45]" : "text-gray-400"
              } font-medium`}
            >
              {step.label}
            </span>
            {index < steps.length - 1 && (
              <span className="mx-4 border-t w-10 border-dashed border-gray-600"></span>
            )}
          </div>
        ))}
      </div>

      {/* ===== باکس فیلتر ===== */}
      <div className="w-11/12 mx-auto bg-[#303030] rounded-2xl border border-[#3a3a3a] p-5">
        <div className="flex flex-wrap items-center justify-between gap-3 text-[#AAAAAA]">
          {/* محل مورد نظر */}
          <div className="flex items-center gap-2 bg-[#2a2a2a] border border-[#3f3f3f] rounded-xl px-4 py-2">
            <MapPinIcon className="w-5 h-5 text-[#AAAAAA]" />
            <select className="bg-transparent outline-none text-sm">
              <option>استان ، شهر</option>
            </select>
          </div>

          {/* نوع ملک */}
          <div className="flex items-center gap-2 bg-[#2a2a2a] border border-[#3f3f3f] rounded-xl px-4 py-2">
            <BuildingOffice2Icon className="w-5 h-5 text-[#AAAAAA]" />
            <select className="bg-transparent outline-none text-sm">
              <option>آپارتمان</option>
              <option>ویلا</option>
              <option>سوئیت</option>
            </select>
          </div>

          {/* نوع معامله */}
          <div className="flex items-center gap-2 bg-[#2a2a2a] border border-[#3f3f3f] rounded-xl px-4 py-2">
            <CurrencyDollarIcon className="w-5 h-5 text-[#AAAAAA]" />
            <select className="bg-transparent outline-none text-sm">
              <option>رهن و اجاره</option>
              <option>خرید و فروش</option>
            </select>
          </div>

          {/* مرتب‌سازی */}
          <div className="flex items-center gap-2 bg-[#2a2a2a] border border-[#3f3f3f] rounded-xl px-4 py-2">
            <BarsArrowUpIcon className="w-5 h-5 text-[#AAAAAA]" />
            <select className="bg-transparent outline-none text-sm">
              <option>جدیدترین آگهی‌ها</option>
              <option>ارزان‌ترین</option>
              <option>گران‌ترین</option>
            </select>
          </div>

          {/* فیلد جستجو */}
          <div className="flex items-center gap-2 bg-[#2a2a2a] border border-[#3f3f3f] rounded-xl px-4 py-2 flex-1 min-w-[200px]">
            <MagnifyingGlassIcon className="w-5 h-5 text-[#AAAAAA]" />
            <input
              type="text"
              placeholder="نام هتل مورد نظر..."
                className="bg-transparent outline-none text-sm w-full placeholder-[#AAAAAA"
            />
          </div>

          {/* تعداد آگهی */}
          <div className="text-[#AAAAAA] text-sm whitespace-nowrap">
            تعداد آگهی:{" "}
            <span className="text-[#AAAAAA] font-mediu">۳۳</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BaseTopFilter
