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
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import LoginModal from "@/components/common/LogInModal/LogInModal";

interface Props {
  house: IHouses;
}

const BookingCard = ({ house }: Props) => {
  const [startDate, setStartDate] = useState<DateObject | null>(null);
  const [endDate, setEndDate] = useState<DateObject | null>(null);
  const [startTime, setStartTime] = useState<string | null>(null);
  const [endTime, setEndTime] = useState<string | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isReserved, setIsReserved] = useState(false);

  const router = useRouter();
 

  const handleAcceptClick = async () => {
   
    if (!startDate || !startTime || !endDate || !endTime) {
      toast.error("لطفاً تاریخ و ساعت ورود و خروج را وارد کنید");
      return;
    }
    const formattedStart = `${startDate.format(
        "YYYY-MM-DD"
      )}T${startTime}:00`;
      const formattedEnd = `${endDate.format("YYYY-MM-DD")}T${endTime}:00`;

    // 4. تست گرفتن داده‌ها
    console.log("Start DateTime:", formattedStart);
    console.log("End DateTime:", formattedEnd);

    router.push(`/houseReserve/${house.id}/finalReserve?step=1`);

    try {
     

      // const res = await postBooking({
      //   houseId: house.id,
      //   reservedDates: [formattedStart, formattedEnd],
      // });
      // console.log(res);
    
      

      setIsReserved(true);
    } catch (error: any) {
      toast.error("مشکلی در ثبت رزرو پیش آمد");
    }
  };

  return (
    <>
      <Card className="w-[29%] flex items-center bg-[#2A2A2A] pb-5 text-white rounded-2xl">
        <div className="w-[60%] font-semibold flex items-center gap-2 bg-[#565656] justify-center rounded-b-full">
          <BuildingOffice2Icon className="w-5 h-5 text-white" />
          <p className="text-center leading-12">رزرو خونه برای:</p>
        </div>
        <div className="flex flex-col gap-5 w-5/6 pt-6 h-auto border-b-1 border-[#646464] pb-5">
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
          <div className="w-full relative flex flex-col">
            <label className="absolute right-3 -top-1 bg-[#2A2A2A] px-1 text-white text-sm">
              ساعت ورود:
            </label>
            <input
              type="time"
              className="w-full border border-gray-300 text-white rounded-xl h-12 px-3 py-2 bg-[#2A2A2A] mt-2"
              value={startTime || ""}
              onChange={(e) => setStartTime(e.target.value)}
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
          <div className="w-full relative flex flex-col">
            <label className="absolute right-3 -top-1 bg-[#2A2A2A] px-1 text-white text-sm">
              ساعت خروج:
            </label>
            <input
              type="time"
              className="w-full border border-gray-300 text-white rounded-xl h-12 px-3 py-2 bg-[#2A2A2A] mt-2"
              value={endTime || ""}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>
        </div>

        <PriceReserve house={house} />
        <AcceptPrice houseId={house.id} onReserve={handleAcceptClick} />
      </Card>
   
    </>
  );
};

export default BookingCard;
