"use client";

import { ChevronDownIcon, MapPinIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const DestinationFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("destination", value);
    } else {
      params.delete("destination");
    }

    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="w-1/4 flex flex-col relative">
      <p className="text-sm text-[#FFFFFF] mb-1">مقصد یا هتل شما:</p>
      <select
        className="w-full text-white p-2 rounded-lg appearance-none pr-8 border border-[#AAAAAA] bg-[#2a2a2a]"
        defaultValue={searchParams.get("destination") || ""}
        onChange={handleChange}
      >
        <option value="">همه مقاصد</option>
        <option value="رشت">رشت</option>
        <option value="بابل"> بابل</option>
        <option value="تهران">تهران</option>
        <option value="مرکز شهر ساری">مرکز شهر ساری</option>
      </select>

      <MapPinIcon className="absolute top-[32px] right-2 w-5 h-5 text-white pointer-events-none" />
      <ChevronDownIcon className="absolute top-[38px] left-2 w-5 h-5 text-white pointer-events-none" />
    </div>
  );
};

export default DestinationFilter;
