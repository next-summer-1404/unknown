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
    <div className="w-1/4 flex relative">
      <lable className="absolute right-3 -top-3 bg-[#2A2A2A] px-1 text-sm text-[#FFFFFF]">
        مقصد یا هتل شما:
      </lable>
      <MapPinIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white pointer-events-none" />{" "}
      <select
        className="w-full h-11 border border-[#AAAAAA] text-white text-[12px] rounded-xl px-3 py-3 focus:outline-none bg-[#2a2a2a] appearance-none pr-8 "
        defaultValue={searchParams.get("destination") || ""}
        onChange={handleChange}
      >
        <option value="">همه مقاصد</option>
        <option value="رشت">رشت</option>
        <option value="بابل"> بابل</option>
        <option value="تهران">تهران</option>
        <option value="مرکز شهر ساری">مرکز شهر ساری</option>
      </select>
      <ChevronDownIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white pointer-events-none" />
    </div>
  );
};

export default DestinationFilter;
