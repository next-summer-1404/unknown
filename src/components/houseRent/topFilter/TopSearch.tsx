import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useDebouncedCallback } from 'use-debounce'
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const TopSearch = () => {
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
    <div className="flex items-center gap-2 bg-[#2a2a2a] border border-[#AAAAAA] rounded-xl px-4 py-2 flex-1 min-w-[200px]">
      <MagnifyingGlassIcon className="w-5 h-5 text-[#AAAAAA]" />
      <input
        type="text"
        placeholder="نام هتل مورد نظر..."
        className="bg-transparent outline-none text-sm w-full placeholder-[#AAAAAA]"
        value={term}
        onChange={(e) => {
          setTerm(e.target.value);
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default TopSearch;
