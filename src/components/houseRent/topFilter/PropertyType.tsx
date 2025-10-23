"use client";
import { BuildingOffice2Icon } from "@heroicons/react/24/outline";
import React from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const PropertyType = () => {
  // const router = useRouter();
  // const searchParams = useSearchParams();
  // const pathname = usePathname();

  // const property = searchParams.get("property_type") || "";

  // const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const value = e.target.value;
  //   const params = new URLSearchParams(searchParams);

  //   if (value) params.set("property_type", value);
  //   else params.delete("property_type");

  //   router.replace(`${pathname}?${params.toString()}`);
  // };

  return (
    <div className="flex items-center gap-2 bg-[#2a2a2a] border border-[#AAAAAA] rounded-xl px-4 py-2">
      <BuildingOffice2Icon className="w-5 h-5 text-[#AAAAAA]" />
      <select
        className="bg-[#2a2a2a] outline-none text-sm text-[#AAAAAA] cursor-pointer"
        // value={property}
        // onChange={handleChange}
      >
        <option value="">نوع ملک</option>
        <option value="آپارتمان">آپارتمان</option>
        <option value="ویلا">ویلا</option>
        <option value="سوئیت">سوئیت</option>
      </select>
    </div>
  );
};

export default PropertyType;
