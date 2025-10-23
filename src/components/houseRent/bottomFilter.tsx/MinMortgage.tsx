"use client";

import React, { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const MinMortgage = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const currentMinMortgage = searchParams.get("minMortgage") || "";
  const [value, setValue] = useState(currentMinMortgage);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    const params = new URLSearchParams(searchParams.toString());
    if (newValue) params.set("minMortgage", newValue);
    else params.delete("minMortgage");

    router.push(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="flex items-center gap-2 border border-[#dadada52] rounded-full px-1 py-2 bg-[#232323] text-gray-200 shrink-0">
      <label className="text-gray-300 whitespace-nowrap text-xs sm:text-sm">
        حداقل رهن:
      </label>
      <input
        type="number"
        placeholder="0"
        value={value}
        onChange={handleChange}
        className="w-20 bg-transparent outline-none text-center text-gray-100 text-sm"
      />
      <span className="text-gray-400 whitespace-nowrap text-xs sm:text-sm">
        تومان
      </span>
    </div>
  );
};

export default MinMortgage;
