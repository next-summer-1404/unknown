import React, { useEffect, useState } from "react";
import { PaperClipIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import GreenArrow from "../.././../assets/images/greenArrow.png";
import { DashboardSummary } from "@/types/DashboardSummary";
import { getSummeryStatic } from "@/utils/service/api/getSummeryStatic";

const BuyerHero = () => {
  const [data, setData] = useState<DashboardSummary | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getSummeryStatic();
      setData(response);
    };
    fetchData();
  }, []);
  const cards = [
    { id: 1, title: "کل رزرو ها ", value: data?.bookings.bookingCount},
    { id: 2, title: "رزرو های فعال ", value: data?.bookings.conformedBookings },
    { id: 3, title: "رزرو های پرداخت نشده ", value: data?.bookings.canceledBookings },
    { id: 4, title: "علاقه مندی ها ", value: data?.bookings.pendingBookings },
  ];

  return (
    <div className="flex justify-between gap-5 w-full">
      {cards.map((item) => (
        <div
          key={item.id}
          className="w-[264px] h-auto bg-[#393939] rounded-2xl flex flex-col justify-between  text-right"
        >
          <div className="flex justify-baseline items-start relative ">
            <PaperClipIcon className="w-10 h-12 pt-4 text-[#000000] bg-[#ECECEC] absolute top-0 right-4 rounded-b-2xl" />
            <div className="flex items-center gap-1 ">
              <span className="text-[18px] font-medium text-[#AAA] absolute top-4 right-16">
                {item.value}
              </span>
            </div>
          </div>

          {/* عنوان */}
          <div className="text-[16px] font-medium text-[#AAA] mt-14 p-2">
            {item.title}
          </div>

          <div className="border-t border-dashed border-gray-300  mb-[2px]" />

          <div className="flex justify-between items-center p-2">
            <button className="text-[16px] text-[#AAA] font-medium">
              مشاهده
            </button>
            <div className="flex items-center gap-1 text-gray-500">
              <Image
                src={GreenArrow}
                width={50}
                height={16}
                alt=""
                className="rotate-0 text-[#AAAA] "
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BuyerHero;
