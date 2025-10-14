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
    <div className="w-48 flex flex-col relative">
      <p className="text-sm text-[#FFFFFF] mb-1">مرتب‌سازی بر اساس:</p>

      <div className="relative">
        <select
          className="w-full text-white p-2 rounded-lg appearance-none pr-10 border border-[#AAAAAA] bg-[#303030]"
          defaultValue={searchParams.get("sort") || ""}
          onChange={handleChange}
        >
          <option value="">بدون مرتب‌سازی</option>
          <option value="newest">جدیدترین</option>
          <option value="oldest">قدیمی‌ترین</option>
          <option value="price_asc">ارزان‌ترین</option>
          <option value="price_desc">گران‌ترین</option>
        </select>

        <BarsArrowDownIcon className="absolute top-[10px] right-4 w-5 h-5 text-white pointer-events-none" />
        <ChevronDownIcon className="absolute top-[8px] left-2 w-5 h-5 text-white pointer-events-none" />
      </div>
    </div>
  );
};

export default SortingFilter;
