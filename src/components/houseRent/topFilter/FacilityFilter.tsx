"use client";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const FacilityFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const selectedOrder = searchParams.get("order") || "";

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams);

    if (value) params.set("order", value);
    else params.delete("order");

    router.replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="flex items-center gap-2 bg-[#2a2a2a] border border-[#AAAAAA] rounded-xl px-4 py-2">
      <CurrencyDollarIcon className="w-5 h-5 text-[#AAAAAA]" />
      <select
        className="bg-[#2a2a2a] outline-none text-sm"
        value={selectedOrder}
        onChange={handleChange}
      >
        <option value="">همه امکانات</option>
        <option value="اتاق خواب">اتاق خواب</option>
        <option value="پارکینگ">پارکینگ</option>
      </select>
    </div>
  );
};

export default FacilityFilter;
