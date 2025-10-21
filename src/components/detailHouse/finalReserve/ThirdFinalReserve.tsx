"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { CheckIcon } from "@heroicons/react/24/solid";

const ThirdFinalReserve = () => {
  const router = useRouter();
        const params = useParams();  
      
        const handleConfirm = (e: React.FormEvent) => {
          e.preventDefault();
          router.push(`/houseReserve/${params.id}/finalReserve?step=3`); 
        };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]  text-white">
      <div className="w-28 h-28 rounded-3xl bg-[#8CFF45]/10 flex items-center justify-center shadow-[0_0_35px_#8CFF45]">
        <CheckIcon className="w-16 h-16 text-[#8CFF45]" />
      </div>

      <p className="mt-8 text-2xl font-bold text-center">
        رزرو بلیط شما با موفقیت انجام شد!
      </p>

      <div className="flex items-center gap-3 mt-10">
        <button
          onClick={() =>
            router.push(`/houseReserve/${params.id}/finalReserve?step=2`)
          }
          className="px-6 py-2 rounded-full border border-[#7A7A7A] text-sm hover:border-[#CFCFCF] transition-all"
        >
          بازگشت به صفحه اصلی
        </button>
        <button
          className="px-6 py-2 rounded-full bg-[#8CFF45] text-[#0e0e0e] font-semibold text-sm hover:bg-[#9FFF57] transition-all"
        >
          بلیت‌های من
        </button>
      </div>
    </div>
  );
};

export default ThirdFinalReserve;
