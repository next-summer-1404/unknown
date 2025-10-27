import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import MainTable from "../../common/table/MainTable";

const reservationColumns = [
  { key: "name", label: "نام اقامتگاه" },
  { key: "date", label: "تاریخ رزرو" },
  { key: "price", label: "قیمت" },
  { key: "status", label: "وضعیت" },
];

const reservationRows = Array.from({ length: 6 }, (_, i) => ({
  key: String(i + 1),
  name: "هتل ساران زمین رشت",
  date: "۱۲ مرداد ۱۴۰۱ / 13:33",
  price: "۸,۰۰۰,۰۰۰ تومان",
  status: (
    <div className="flex items-center justify-start gap-1 text-green-400 font-semibold">
      <CheckCircleIcon className="w-4 h-4" />
      <span>تایید شده</span>
    </div>
  ),
}));

export default function ReservationSection() {
  return (
    <MainTable 
      title="رزروهای اخیر مشتریان"
      columns={reservationColumns}
      rows={reservationRows}
    />
  );
}
