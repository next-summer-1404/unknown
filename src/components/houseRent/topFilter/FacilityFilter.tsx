'use client'
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const FacilityFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const selectedType = searchParams.get("Facility") || "";

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams);

    if (value) params.set("Facility", value);
    else params.delete("Facility");

    router.replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="flex items-center gap-2 bg-[#2a2a2a] border border-[#AAAAAA] rounded-xl px-4 py-2">
      <CurrencyDollarIcon className="w-5 h-5 text-[#AAAAAA]" />
      <select
        className="bg-[#2a2a2a] outline-none text-sm"
        value={selectedType}
        onChange={handleChange}
      >
        <option> پارکینگ </option>
        <option> اتاق خواب </option>
      </select>
    </div>
  );
};

export default FacilityFilter;
