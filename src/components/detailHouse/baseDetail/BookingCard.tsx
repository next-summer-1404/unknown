"use client";

import React, { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Card, Button } from "@heroui/react";
import { BuildingOffice2Icon, UsersIcon } from "@heroicons/react/24/outline";
import { IHouses } from "@/types/IHouses";
import PriceReserve from "./PriceReserve";
import AcceptPrice from "./AcceptPrice";
import toast from "react-hot-toast";
import { postBooking } from "@/utils/service/api/postBooking";

interface Props {
  house: IHouses;
}

const BookingCard = ({ house }: Props) => {
  const [startDate, setStartDate] = useState<DateObject | null>(null);
  const [endDate, setEndDate] = useState<DateObject | null>(null);
  const [isReserved, setIsReserved] = useState(false);

  const handleReserveDates = async () => {
    if (!startDate || !endDate) {
      toast("لطفاً تاریخ ورود و خروج را انتخاب کنید");
      return;
    }

    try {
      const formattedStart = startDate.format("YYYY-MM-DD");
      const formattedEnd = endDate.format("YYYY-MM-DD");

      const res = await postBooking({
        houseId: house.id,
        reservedDates: [formattedStart, formattedEnd],
      });
      console.log(res);

      setIsReserved(true);
    } catch (error: any) {
      toast.error("مشکلی در ثبت رزرو پیش آمد");
    }
  };

  return (
    <Card className="bg-[#2A2A2A] text-white rounded-2xl w-full">
      <div className="flex flex-col w-5/6 h-auto m-auto border-b-1 border-[#646464] pb-5">
        <h3 className="font-semibold flex items-center gap-2 mb-4 bg-[#565656] justify-center rounded-b-full w-2/3 m-auto">
          <BuildingOffice2Icon className="w-5 h-5 text-white" />
          <p className="text-center leading-12">رزرو خونه برای:</p>
        </h3>

        {/* تاریخ ورود */}
        <div className="w-full relative flex flex-col">
          <label className="absolute right-3 -top-2 bg-[#2A2A2A] px-1 text-white text-sm">
            تاریخ ورود:
          </label>
          <DatePicker
            calendar={persian}
            locale={persian_fa}
            placeholder="وارد کنید..."
            value={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={new Date()}
            className="w-full"
            inputClass="w-full border border-gray-300 text-white rounded-xl h-16 px-3 py-3 focus:outline-none"
          />
        </div>

        <div className="w-full relative mt-5 flex flex-col">
          <label className="absolute right-3 -top-2 bg-[#2A2A2A] px-1 text-white text-sm">
            تاریخ خروج:
          </label>
          <DatePicker
            calendar={persian}
            locale={persian_fa}
            placeholder="وارد کنید..."
            value={endDate}
            onChange={(date) => setEndDate(date)}
            minDate={startDate || new Date()}
            className="w-full"
            inputClass="w-full border border-gray-300 text-white rounded-xl h-16 px-3 py-3 focus:outline-none"
          />
        </div>
      </div>

      <PriceReserve house={house} />
      {isReserved && <AcceptPrice houseId={house.id} />}
    </Card>
  );
};

export default BookingCard;
