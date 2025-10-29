import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const MainNotifiction = () => {
  const notifications = [
    {
      id: 1,
      message: "فروشنده امیر محمد طلایی یک خانه برای رزواگمی کرده است",
      date: "۱۲ مرداد / ۱۴۰۱",
      time: "۱۲:۳۳",
      read: false,
    },
    {
      id: 2,
      message: "به سایت دانا خوش آمدید",
      date: "۱۲ مرداد / ۱۴۰۱",
      time: "۱۲:۳۳",
      read: false,
    },
    {
      id: 3,
      message: "فروشنده امیر محمد طلایی یک خانه برای رزواگمی کرده است",
      date: "۱۲ مرداد / ۱۴۰۱",
      time: "۱۲:۳۳",
      read: true,
    },
    {
      id: 4,
      message: "به سایت دانا خوش آمدید",
      date: "۱۲ مرداد / ۱۴۰۱",
      time: "۱۲:۳۳",
      read: true,
    },
    {
      id: 5,
      message: "فروشنده امیر محمد طلایی یک خانه برای رزواگمی کرده است",
      date: "۱۲ مرداد / ۱۴۰۱",
      time: "۱۲:۳۳",
      read: true,
    },
  ];

  const unread = notifications.filter((n) => !n.read);
  const read = notifications.filter((n) => n.read);

  return (
    <div className="bg-[#393939] text-[#AAA] rounded-xl p-3 mt-5">
      <div className="bg-[#2D2B2B] rounded-xl p-2 flex gap-[580px]">
        <p className="text-[#AAA] text-md">اعلان</p>
        <p className="text-[#AAA] text-md">تاریخ</p>
      </div>

      <div className="mt-3">
        <div className="text-sm text-[#8CFF45] border-b border-dashed border-[#AAA] pb-1 mb-2 text-right">
          خوانده نشده
        </div>
        {unread.map((n) => (
          <div
            key={n.id}
            className="grid grid-cols-2 items-center py-3 px-2 border-b border-[#AAA]"
          >
            <div className="text-right">
              <p className="text-sm">{n.message}</p>
            </div>

            <div className="flex items-center justify-evenly gap-60 text-left text-xs text-[#AAA]">
              <span>
                {n.time} ـ {n.date}
              </span>
              <div className="inline-flex items-center gap-1 bg-[#8CFF45] text-[#393939] text-xs font-semibold px-3 py-1 rounded-full">
                <CheckCircleIcon className="w-4 h-4" />
                علامت‌گذاری به‌عنوان خوانده شده
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <div className="text-sm text-[#8CFF45] border-b border-dashed border-[#AAA] pb-1 mb-2 text-right">
          خوانده شده
        </div>
        {read.map((n) => (
          <div
            key={n.id}
            className="grid grid-cols-2 items-center py-3 px-2 border-b border-[#AAA] text-[#AAA]"
          >
            <div className="text-right">
              <p className="text-sm">{n.message}</p>
            </div>

            <div className=" text-xs text-[#AAA]">
              {n.time} ـ {n.date}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end items-center gap-2 mt-4">
        <button className="bg-[#8CFF45] text-[#393939] px-3 py-1 rounded text-xs font-semibold">
          ۱
        </button>
        {[2, 3, 4].map((n) => (
          <button
            key={n}
            className="px-3 py-1 rounded text-xs text-[#AAA] "
          >
            {n}
          </button>
        ))}
        <span className="text-[#AAA] text-xs">...</span>
      </div>
    </div>
  );
};

export default MainNotifiction;
