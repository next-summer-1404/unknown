import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import DynamicTable from "../../common/table/DynamicTable";

const columns = [
  { key: "name", label: "نام اقامتگاه" },
  { key: "date", label: "تاریخ رزرو" },
  { key: "price", label: "قیمت" },
  { key: "status", label: "وضعیت" },
];

const rows = Array.from({ length: 6 }, (_, i) => ({
  key: i + 1,
  name: "هتل ساران زمین رشت",
  date: "۱۲ مرداد ۱۴۰۱ / 13:33",
  price: "۸,۰۰۰,۰۰۰ تومان",
  status: (
    <div className="flex items-center justify-start gap-1 text-[#8CFF45] font-semibold">
      <CheckCircleIcon className="w-4 h-4" />
      <span>تایید شده</span>
    </div>
  ),
}));

export default function ReservationSection() {
  return (
    <DynamicTable
      title="رزروهای اخیر مشتریان"
      columns={columns}
      rows={rows}
    />
  );
}
