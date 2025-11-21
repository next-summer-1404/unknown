"use client"
import React, { useEffect, useState } from "react";
import DynamicTable from "../../common/table/DynamicTable";
import { BookingCustomersResponse } from "@/types/BookingCustomersResponse ";
import { getCustomersBooking } from "@/utils/service/api/getCustomersBooking";

{/* check */}

const columns = [
  { key: "name", label: "نام اقامتگاه" },
  { key: "price", label: "قیمت" },
  // { key: "score", label: "امتیاز" },
  { key: "visits", label: "بازدیدها" },
  // { key: "bookings", label: "رزروها" },
  { key: "status", label: "وضعیت" },
];

interface PropertyTableProps {
  bookingId: string;
  onAddClick: () => void;
}

const PropertyTable: React.FC<PropertyTableProps> = ({ onAddClick ,bookingId}) => {
  const [data, setData] = useState<BookingCustomersResponse | null>(null);

  const getData = async () => {
     const response: BookingCustomersResponse = await getCustomersBooking(bookingId);
    //  console.log(response,'ffffffff')
      setData(response);
  }

  useEffect(() => {
   getData()
  }, [bookingId])

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
