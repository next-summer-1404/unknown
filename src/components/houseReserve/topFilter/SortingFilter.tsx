"use client";

import { BarsArrowDownIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const SortingFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams);

    if (value) params.set("sort", value);
    else params.delete("sort");

    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="w-1/4 flex relative">
      <label className="absolute right-3 -top-3 bg-[#2A2A2A] px-1 text-sm text-[#FFFFFF]">مرتب‌سازی بر اساس:</label>

       <BarsArrowDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white pointer-events-none" />
        <select
          className="w-full h-11 border border-[#AAAAAA] text-white text-[12px] rounded-xl  px-3 py-3 focus:outline-none bg-[#2a2a2a] appearance-none pr-8"
          defaultValue={searchParams.get("sort") || ""}
          onChange={handleChange}
        >
          <option value="">بدون مرتب‌سازی</option>
          <option value="newest">جدیدترین</option>
          <option value="oldest">قدیمی‌ترین</option>
          <option value="price_asc">ارزان‌ترین</option>
          <option value="price_desc">گران‌ترین</option>
        </select>

       
        <ChevronDownIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white pointer-events-none" />
     
    </div>
  );
};

export default SortingFilter;
