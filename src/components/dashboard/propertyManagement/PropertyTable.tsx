"use client"
import React, { useEffect, useState } from "react";
import DynamicTable from "../../common/table/DynamicTable";
import { IHouses } from "@/types/IHouses";
import { getHouses } from "@/utils/service/api/getAllHouses";

const columns = [
  { key: "name", label: "نام اقامتگاه" },
  { key: "price", label: "قیمت" },
  { key: "score", label: "امتیاز" },
  // { key: "visits", label: "بازدیدها" },
  { key: "bookings", label: "رزروها" },
  // { key: "status", label: "وضعیت" },
];

const PropertyTable = ({ onAddClick }: { onAddClick: () => void }) => {
  const [data, setData] = useState<IHouses[]>()

  const getData = async () => {
    const response = await getHouses()
    setData(response.houses)
  }

  useEffect(() => {
    if (!data) {
      getData()
    }
  }, [data])

  const rows = data?.map((h) => ({
    key: h.id,
    name: h.title,
    price: `${Number(h.price).toLocaleString("fa-IR")} تومان`,
    score: h.rate ? `${h.rate} از ۵` : "بدون امتیاز",
    bookings: h.bookings ?? 0,
   
  }));

  return (
    <DynamicTable
      columns={columns}
      rows={rows ? rows : []}
      withActions
      addButtonText="افزودن ملک +"
      onAddClick={onAddClick}
    />
  );
};

export default PropertyTable;
