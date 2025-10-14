"use client";

import React, { useState, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const MaximumPrice = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const currentMaxPrice = searchParams.get("maxPrice") || "";
  const [value, setValue] = useState(currentMaxPrice);

  const updateMinPrice = useDebouncedCallback((val: string) => {
    const params = new URLSearchParams(searchParams);
    if (val) params.set("maxPrice", val);
    else params.delete("maxPrice");
    router.replace(`${pathname}?${params.toString()}`);
  }, 400);

  useEffect(() => {
    setValue(currentMaxPrice);
  }, [currentMaxPrice]);

  return (
    <div className="w-1/3 flex flex-col relative">
      <label
        htmlFor="min-price"
        className="text-sm text-[#FFFFFF] mb-2  select-none"
      >
        حداکثر قیمت:
      </label>

      <div className="relative flex items-center ">
        <input
          type="number"
          id="max-price"
          inputMode="numeric"
          placeholder="۰"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            updateMinPrice(e.target.value);
          }}
          className="
            w-full bg-transparent text-white text-center
            border border-[#AAAAAA] rounded-lg
            p-2 outline-none
            appearance-none
          "
          style={{
            MozAppearance: "textfield",
          }}
        />

        <span className="absolute left-10 text-sm text-gray-400">تومان</span>
      </div>
    </div>
  );
};

export default MaximumPrice;
