"use client"
import React, { useEffect, useState } from "react";
import DynamicTable from "../../common/table/DynamicTable";
import { getCustomersBooking } from "@/utils/service/api/getCustomersBooking";
import { BookingCustomersResponse } from "@/types/BookingCustomersResponse ";

{/* check */}

const columns = [
  { key: "name", label: "نام اقامتگاه" },
  { key: "price", label: "قیمت" },
  // { key: "score", label: "امتیاز" },
  { key: "visits", label: "بازدیدها" },
  // { key: "bookings", label: "رزروها" },
  { key: "status", label: "وضعیت" },
];

const PropertyTable = ({ onAddClick }: { onAddClick: () => void }) => {
  const [data, setData] = useState<BookingCustomersResponse | null>(null);

  const getData = async () => {
     const response: BookingCustomersResponse = await getCustomersBooking();
     console.log(response,'ffffffff')
      setData(response);
  }

  useEffect(() => {
   getData
  }, [])

   const rows =
    data?.bookings.map((b) => ({
      key: b.id,
      name: b.house.title,
      price: `${Number(b.house.price).toLocaleString("fa-IR")} تومان`,
      status: b.status === "pending" ? "در انتظار تایید" : b.status,
      dates: b.reservedDates
        .map((rd) => new Date(rd.value).toLocaleDateString("fa-IR"))
        .join(" تا "),
    })) ?? [];

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
