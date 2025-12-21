"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SearchFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [term, setTerm] = useState(searchParams.get("query") || "");

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    router.replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="w-1/2 flex relative">
      <label className="absolute right-3 -top-3 bg-[#2A2A2A] px-1 text-sm text-[#FFFFFF]">
        جستجو:
      </label>

      <div className="w-full h-11 flex justify-between items-center border border-[#AAAAAA] text-white rounded-xl px-3 py-3 focus:outline-none bg-[#2a2a2a] appearance-none pr-8 ">
        <input
          type="text"
          placeholder="نام هتل موردنظر..."
          className="bg-transparent text-white outline-none w-full placeholder:text-white text-[12px]"
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
            handleSearch(e.target.value);
          }}
        />{" "}
        <MagnifyingGlassIcon className="w-5 h-5 text-white mr-1" />
      </div>
    </div>
  );
};

export default SearchFilter;
