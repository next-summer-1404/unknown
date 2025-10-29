"use client";
import React, { useState } from "react";
import FavFilterModal from "./FavFilterModal";
import FavoriteTable from "./FavoriteTable";

const TopFavorite = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="p-3 text-right">
      <div className="h-20 flex items-center justify-between">
        <p className="w-1/2 font-[500] text-xl text-[#AAA]">
            علاقه مندی ها
        </p>

        <div className="flex justify-between items-center w-1/2 gap-5">
          <input
            type="text"
            placeholder="جستجو"
            className="outline-none rounded-2xl text-[#AAA] w-full border border-[#555] placeholder-[#777] p-2 transition-all duration-200 "
          />

          <button
            onClick={() => setIsFilterOpen(true)}
            className="bg-[#8CFF45] text-[#393939] font-semibold rounded-2xl px-8 py-2 hover:bg-[#aaff6b] active:scale-95 transition-all duration-150"
          >
            فیلتر
          </button>
        </div>
      </div>

      <div className="border-t border-dashed border-[#555] mt-2" />

      <FavoriteTable />

      <FavFilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApply={() => setIsFilterOpen(false)}
      />
    </div>
  );
};

export default TopFavorite;
