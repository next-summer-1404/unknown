"use client";
import { ChevronDownIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { getHouses } from "@/utils/service/api/getAllHouses";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { IHouses } from "@/types/IHouses";

const HotelFacilities = () => {
  const [options, setOptions] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const selectedFacility = searchParams.get("facility") || "";

  useEffect(() => {
    const fetchFacilityOptions = async () => {
      try {
        const data = await getHouses();
        const houses: IHouses[] = data.houses ?? [];
        const yardTypes = houses
          .map((h) => h.yard_type)
          .filter((v): v is string => !!v && v.trim() !== "");

        const optionsSet = new Set<string>();
        optionsSet.add("استخر دار");
        optionsSet.add("پارکینگ");
        optionsSet.add("تعداد اتاق");
        optionsSet.add("تعداد سرویس بهداشتی");
        yardTypes.forEach((y) => optionsSet.add(y));
        let allOptions = Array.from(optionsSet);
        const indexOfBaghche = allOptions.indexOf("باغچه");
        if (indexOfBaghche !== -1) {
          allOptions = allOptions.slice(0, indexOfBaghche + 1);
        }

        setOptions(allOptions);
      } catch (error) {
        console.error("خطا در دریافت امکانات:", error);
      }
    };

    fetchFacilityOptions();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams);

    if (value) params.set("facility", value);
    else params.delete("facility");

    router.replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="w-1/3 flex flex-col relative">
      <label className="absolute right-3 -top-2 bg-[#2A2A2A] px-1 text-sm text-[#FFFFFF]">امکانات هتل:</label>

      <select
        className="w-full mt-1 text-white p-2 rounded-lg appearance-none pr-8 border border-[#AAAAAA] bg-[#303030]"
        value={selectedFacility}
        onChange={handleChange}
      >
        <option value="">همه‌ی امکانات</option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <Squares2X2Icon className="absolute top-[38px] right-2 w-5 h-5 text-white pointer-events-none" />
      <ChevronDownIcon className="absolute top-[38px] left-2 w-5 h-5 text-white pointer-events-none" />
    </div>
  );
};

export default HotelFacilities;
