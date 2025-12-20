"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const MinimumPrice = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const currentMinPrice = searchParams.get("minPrice") || "";
  const [value, setValue] = useState(currentMinPrice);
  const lastUpdateId = useRef(0);

  useEffect(() => {
    setValue(currentMinPrice);
  }, [currentMinPrice]);

  useEffect(() => {
    const updateId = ++lastUpdateId.current;
    const update = async () => {
      await delay(500);

      if (updateId !== lastUpdateId.current) return;

      const params = new URLSearchParams(searchParams);
      if (value) params.set("minPrice", value.toString());
      else params.delete("minPrice");

      router.replace(`${pathname}?${params.toString()}`);
    };

    update();
  }, [value, pathname, router, searchParams]);

  return (
    <div className="w-1/3 flex flex-col relative">
      <label
        htmlFor="min-price"
        className="absolute right-3 -top-3 bg-[#2A2A2A] px-1 text-sm text-[#FFFFFF] z-50"
      >
        حداقل قیمت:
      </label>

      <div className="relative flex items-center">
        <input
          type="number"
          id="min-price"
          inputMode="numeric"
          placeholder="۰"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="
            w-full h-11 bg-transparent text-white text-center
            border border-[#AAAAAA] rounded-xl
            p-2 outline-none
            px-3 py-2 
          "
          style={{ MozAppearance: "textfield" }}
        />
        <span className="absolute left-10 text-sm text-gray-400">تومان</span>
      </div>
    </div>
  );
};

export default MinimumPrice;
