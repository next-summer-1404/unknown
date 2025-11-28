"use client";

import React, { FC } from "react";
import { useRouter, useParams } from "next/navigation";
import { TicketIcon } from "@heroicons/react/24/outline";

interface PaymentSummaryProps {
  validateTravelers?: () => boolean; // تابع اعتبارسنجی مسافران
  validateContact?: () => boolean;
}
const PaymentSummary: FC<PaymentSummaryProps>= ({  validateTravelers, validateContact  }) => {
  const router = useRouter();
  const params = useParams();  

 
 const handleConfirm = () => {
    // بررسی اعتبار داده‌ها قبل از ذخیره
    if (validateTravelers && !validateTravelers()) {
      alert("لطفاً اطلاعات مسافران را کامل وارد کنید.");
      return;
    }

    if (validateContact && !validateContact()) {
      alert("لطفاً شماره همراه و ایمیل را کامل وارد کنید.");
      return;
    }       
    router.push(`/houseReserve/${params.id}/finalReserve?step=2`);
  };

  return (
    <>
     
      <div className=" h-20 rounded-2xl flex justify-between items-center px-6 border-2 border-dashed border-[#AAAAAA]">
        {/* قیمت بلیط */}
        <div className="flex item-center gap-2 text-[#8CFF45] text-sm">
          <TicketIcon className="w-6 h-6 rotate-90 text-white"/>
          <span className="text-[#fff] text-lg">قیمت بلیط:</span>
          <span className="font-semibold text-[#8CFF45]">
            ۱.۵۰۰.۰۰۰&nbsp;تومان
          </span>
        </div>

        <button
          type="button"
          onClick={handleConfirm}
          className="flex items-center gap-2 text-[#8CFF45] border border-[#8CFF45] px-4 py-2 rounded-xl text-sm hover:bg-[#8CFF45]/10 transition cursor-pointer"
        >
          <span>تایید و ادامه فرایند</span>
          <span className="rotate-180">{"<"}</span>
        </button>
      </div>
    </>
  );
};

export default PaymentSummary;
