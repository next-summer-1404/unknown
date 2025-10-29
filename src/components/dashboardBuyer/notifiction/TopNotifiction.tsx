"use client";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import NotifictionModal from "./NotifictionModal";

const TopNotifiction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConfirm = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-3 text-right h-auto rounded-2xl">
      <div className="h-20 flex items-center justify-between">
        <p className="font-medium text-xl text-[#AAA]">لیست اعلان‌های شما</p>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <label className="text-[#AAAAAA] text-sm whitespace-nowrap">
              نوع اعلان:
            </label>
            <div className="relative">
              <select
                className="w-[180px] rounded-2xl border border-[#555555]
                           bg-[#2b2b2b] text-[#CCCCCC]
                           text-sm pl-8 pr-3 py-2
                           outline-none appearance-none
                           transition-all duration-200"
              >
                <option>همه</option>
                <option>خوانده شده</option>
                <option>خوانده نشده</option>
              </select>
              <ChevronDownIcon className="w-5 h-5 text-[#888] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#8CFF45] text-[#393939]
                       rounded-2xl px-6 py-2
                       text-sm font-semibold
                       hover:bg-[#aaff6b] active:scale-95
                       transition-all"
          >
            علامت‌گذاری به عنوان خوانده شده
          </button>
        </div>
      </div>

      <div className="border-t border-dashed border-[#555] mt-2" />

      <NotifictionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default TopNotifiction;
