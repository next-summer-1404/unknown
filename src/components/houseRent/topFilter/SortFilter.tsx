import { BarsArrowUpIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const SortFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams);

    if (value) params.set("sort", value);
    else params.delete("sort");

    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-2 bg-[#2a2a2a] border border-[#AAAAAA] rounded-xl px-4 py-2">
      <BarsArrowUpIcon className="w-5 h-5 text-[#AAAAAA]" />
      <select
        className="bg-[#2a2a2a] outline-none text-sm"
        defaultValue={searchParams.get("sort") || ""}
        onChange={handleChange}
      >
        
        <option value="">بدون مرتب‌سازی</option>
        <option value="ظرفیت"> ظرفیت</option>
        <option value="نوع معامله">نوع معامله </option>
      </select>
    </div>
  );
};

export default SortFilter;
