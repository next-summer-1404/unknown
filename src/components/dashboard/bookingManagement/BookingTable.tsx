'use client';
import React from "react";
import DynamicTable, { Column, Row } from "../../common/table/DynamicTable";

const BookingTable = () => {
  const columns: Column[] = [
    { key: "propertyName", label: "نام ملک" },
    { key: "guestInfo", label: "اطلاعات مسافر" },
    { key: "reserveDate", label: "تاریخ رزرو" },
    { key: "amount", label: "مبلغ" },
    { key: "reserveStatus", label: "وضعیت رزرو" },
    { key: "paymentStatus", label: "وضعیت پرداخت" },
  ];

  const rows: Row[] = [
    {
      key: 1,
      propertyName: "هتل سبلان پایین رشت",
      guestInfo: "سبحان عرب خزائلی - 8 / 4 / 1401",
      reserveDate: "1401 / 05 / 13 - 1401 / 05 / 18",
      amount: "1,800,000 تومان",
      reserveStatus: (
        <span className="flex items-center gap-1 text-xs px-3 py-1 rounded-full font-semibold w-fit bg-[#8CFF45] text-[#0E0E0E]">
          تایید شده ✓
        </span>
      ),
      paymentStatus: (
        <span className="flex items-center gap-1 text-xs px-3 py-1 rounded-full font-semibold w-fit bg-[#FF4556] text-white">
          لغو شده ✕
        </span>
      ),
    },
    {
      key: 2,
      propertyName: "هتل سبلان پایین رشت",
      guestInfo: "سبحان عرب خزائلی - 8 / 4 / 1401",
      reserveDate: "1401 / 05 / 13 - 1401 / 05 / 18",
      amount: "1,800,000 تومان",
      reserveStatus: (
        <span className="flex items-center gap-1 text-xs px-3 py-1 rounded-full font-semibold w-fit bg-[#FFC107] text-[#0E0E0E]">
          در انتظار ●
        </span>
      ),
      paymentStatus: (
        <span className="flex items-center gap-1 text-xs px-3 py-1 rounded-full font-semibold w-fit bg-[#8CFF45] text-[#0E0E0E]">
          تایید شده ✓
        </span>
      ),
    },
    {
      key: 3,
      propertyName: "هتل سبلان پایین رشت",
      guestInfo: "سبحان عرب خزائلی - 8 / 4 / 1401",
      reserveDate: "1401 / 05 / 13 - 1401 / 05 / 18",
      amount: "1,800,000 تومان",
      reserveStatus: (
        <span className="flex items-center gap-1 text-xs px-3 py-1 rounded-full font-semibold w-fit bg-[#8CFF45] text-[#0E0E0E]">
          تایید شده ✓
        </span>
      ),
      paymentStatus: (
        <span className="flex items-center gap-1 text-xs px-3 py-1 rounded-full font-semibold w-fit bg-[#8CFF45] text-[#0E0E0E]">
          تایید شده ✓
        </span>
      ),
    },
  ];

  return (
    <div className=" text-[#AAA]">
      <DynamicTable    
        columns={columns}
        rows={rows}
        withActions={true}
      />
    </div>
  );
};

export default BookingTable;
