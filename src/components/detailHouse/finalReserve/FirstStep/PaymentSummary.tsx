"use client";

import React from "react";
import { useRouter, useParams } from "next/navigation";

const PaymentSummary = () => {
  const router = useRouter();
  const params = useParams();  

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/houseReserve/${params.id}/finalReserve?step=2`); 
  };

  return (
    <>
     
      <div className=" h-20 rounded-2xl flex justify-between items-center px-6 border-2 border-dashed border-[#AAAAAA]">
        {/* قیمت بلیط */}
        <div className="flex  gap-2 text-[#8CFF45] text-sm items-center">
          <span className="text-[#fff] text-lg">قیمت بلیط:</span>
          <span className="font-semibold text-[#8CFF45]">
            ۱.۵۰۰.۰۰۰&nbsp;تومان
          </span>
        </div>

        <button
          type="button"
          onClick={() =>
            router.push(`/houseReserve/${params.id}/finalReserve?step=2`)
          }
          className="flex items-center gap-2 text-[#8CFF45] border border-[#8CFF45] px-4 py-2 mt-3 rounded-full text-sm hover:bg-[#8CFF45]/10 transition"
        >
          <span>تایید و ادامه فرایند</span>
          <span className="rotate-180">{"<"}</span>
        </button>
      </div>
    </>
  );
};

export default PaymentSummary;
