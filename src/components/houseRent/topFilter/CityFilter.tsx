"use client";

import { MapPinIcon } from "@heroicons/react/24/outline";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React from "react";

const CityFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentLocation = searchParams.get("location") || "";

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value.trim();
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("location", value);
    } else {
      params.delete("location");
    }

    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-2 bg-[#2a2a2a]  border border-[#AAAAAA]/30 rounded-xl px-4 py-2">
      <MapPinIcon className="w-5 h-5 text-[#AAAAAA]" />
      <select
        className="outline-none text-sm text-[#AAAAAA] cursor-pointer bg-[#2a2a2a] "
        value={currentLocation}
        onChange={handleChange}
      >
        <option value="">همهٔ موقعیت‌ها</option>
        <option value="تهران">تهران</option>
        <option value="اصفهان">اصفهان</option>
        <option value="شیراز">شیراز</option>
      </select>
    </div>
  );
};

export default CityFilter;
