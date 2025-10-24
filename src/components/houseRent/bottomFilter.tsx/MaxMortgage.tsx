"use client";
import React, { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const MaxMortgage = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const currentMaxMortgage = searchParams.get("maxMortgage") || "";
  const [value, setValue] = useState(currentMaxMortgage);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    const params = new URLSearchParams(searchParams.toString());
    if (newValue) {
      params.set("maxMortgage", newValue);
    } else {
      params.delete("maxMortgage");
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-2 border border-[#dadada52] rounded-full px-1 py-2 bg-[#232323] text-gray-200 shrink-0">
      <label className="whitespace-nowrap text-xs sm:text-sm">
        حداکثر رهن:
      </label>
      <input
        type="number"
        placeholder="0"
        value={value}
        onChange={handleChange}
        className="w-20 bg-transparent outline-none text-center text-gray-300 text-sm"
      />
      <span className="whitespace-nowrap text-xs text-gray-400 sm:text-sm">
        تومان
      </span>
    </div>
  );
};

export default MaxMortgage;
