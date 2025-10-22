"use client";

import { MapPinIcon } from "@heroicons/react/24/outline";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React from "react";

const CityFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentCity = searchParams.get("city") || "";

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("city", value);
    } else {
      params.delete("city");
    }

    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-2 bg-[#2a2a2a] border border-[#AAAAAA] rounded-xl px-4 py-2">
      <MapPinIcon className="w-5 h-5 text-[#AAAAAA]" />
      <select
        className="bg-[#2a2a2a] outline-none text-sm text-[#AAAAAA]"
        value={currentCity}
        onChange={handleChange}
      >
        <option value="">همه‌ی شهرها</option>
        <option value="تهران">تهران</option>
        <option value="اصفهان">اصفهان</option>
        <option value="شیراز">شیراز</option>
      </select>
    </div>
  );
};

export default CityFilter;
