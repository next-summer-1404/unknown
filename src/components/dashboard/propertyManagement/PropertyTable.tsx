import React from "react";
import DynamicTable from "../../common/table/DynamicTable";

const columns = [
  { key: "name", label: "نام اقامتگاه" },
  { key: "price", label: "قیمت" },
  { key: "score", label: "امتیاز" },
  { key: "visits", label: "بازدیدها" },
  { key: "bookings", label: "رزروها" },
  { key: "status", label: "وضعیت" },
];

const rows = [
  {
    key: 1,
    name: "هتل ساران زمین رشت",
    price: "۸,۸۰۰,۰۰۰ تومان",
    score: "۴ از ۵",
    visits: 25,
    bookings: 5,
    status: "فعال",
  },
  {
    key: 2,
    name: "هتل ساران زمین رشت",
    price: "۸,۸۰۰,۰۰۰ تومان",
    score: "۴ از ۵",
    visits: 12,
    bookings: 3,
    status: "در انتظار",
  },
  {
    key: 3,
    name: "هتل ساران زمین رشت",
    price: "۸,۸۰۰,۰۰۰ تومان",
    score: "۴ از ۵",
    visits: 7,
    bookings: 1,
    status: "غیرفعال",
  },
];

export default function PropertyTable({ onAddClick }: { onAddClick: () => void }) {
  return (
    <DynamicTable
      columns={columns}
      rows={rows}
      withActions
      addButtonText="افزودن ملک +"
      onAddClick={onAddClick}
    />
  );
}
