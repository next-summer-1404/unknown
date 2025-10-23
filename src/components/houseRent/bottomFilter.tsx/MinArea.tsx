import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const MinArea = () => {
  

  return (
    <div className="flex items-center gap-2 border border-[#dadada52] rounded-full px-1 py-2 bg-[#232323] text-gray-200 shrink-0">
      <label className="text-gray-300 whitespace-nowrap text-xs sm:text-sm">
        حداقل متراژ:
      </label>
      <input
        type="number"
        placeholder="0"
        className="w-14 bg-transparent outline-none text-center text-gray-100 text-sm"
      />
      <span className="text-gray-400 whitespace-nowrap text-xs sm:text-sm">
        متر
      </span>
    </div>
  );
};

export default MinArea;
