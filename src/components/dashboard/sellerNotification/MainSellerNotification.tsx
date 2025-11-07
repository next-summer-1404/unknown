"use client";
import React, { useEffect, useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { getNotifications } from "@/utils/service/api/getNotifications";
import { NotificationItem, NotificationTypes  } from "@/types/NotificationTypes";

const MainSellerNotification = () => {
  const [data, setData] = useState<NotificationItem[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 10;

  useEffect(() => {
    const fetchData = async () => {
      const response: NotificationTypes = await getNotifications();
      setData(response.data ?? []);
    };
    fetchData();
  }, []);

  const unread = data.filter((n) => !n.isRead);
  const read = data.filter((n) => n.isRead);

  const totalItems = data.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const pageData = data.slice(startIndex, endIndex);

  return (
    <div className="bg-[#393939] text-[#AAA] rounded-xl p-3 mt-5">
      <div className="bg-[#2D2B2B] rounded-xl p-2 flex justify-start gap-[570px] text-md text-[#AAA]">
        <p>اعلان</p>
        <p>تاریخ</p>
      </div>

      <div className="mt-3">
        <div className="text-sm text-[#8CFF45] border-b border-dashed border-[#AAA] pb-1 mb-2 text-right">
          خوانده نشده
        </div>

        {unread.length === 0 ? (
          <p className="text-center text-xs text-[#777] py-2">
            هیچ اعلان خوانده‌نشده‌ای وجود ندارد.
          </p>
        ) : (
          unread.map((n) => (
            <div
              key={n.id}
              className="grid grid-cols-2 items-center py-3 px-2 border-b border-[#AAA]"
            >
              <div className="text-right">
                <p className="text-sm">{n.message}</p>
              </div>

              <div className="flex items-center justify-between text-left text-xs text-[#AAA]">
                <span>
                  {new Date(n.createdAt).toLocaleTimeString("fa-IR")} ـ{" "}
                  {new Date(n.createdAt).toLocaleDateString("fa-IR")}
                </span>

                <button
                  type="button"
                  className="inline-flex items-center gap-1 bg-[#8CFF45] text-[#393939] text-xs font-semibold px-3 py-1 rounded-full"
                >
                  <CheckCircleIcon className="w-4 h-4" />
                  علامت‌گذاری به‌عنوان خوانده شده
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-4">
        <div className="text-sm text-[#8CFF45] border-b border-dashed border-[#AAA] pb-1 mb-2 text-right">
          خوانده شده
        </div>

        {read.length === 0 ? (
          <p className="text-center text-xs text-[#777] py-2">
            هیچ اعلان خوانده‌شده‌ای وجود ندارد.
          </p>
        ) : (
          read.map((n) => (
            <div
              key={n.id}
              className="grid grid-cols-2 items-center py-3 px-2 border-b border-[#AAA]"
            >
              <div className="text-right">
                <p className="text-sm">{n.message}</p>
              </div>

              <div className="text-xs text-[#AAA]">
                {new Date(n.createdAt).toLocaleTimeString("fa-IR")} ـ{" "}
                {new Date(n.createdAt).toLocaleDateString("fa-IR")}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center gap-2 mt-4">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
          <button
            key={n}
            onClick={() => setCurrentPage(n)}
            className={`px-3 py-1 rounded text-xs font-semibold ${
              n === currentPage
                ? "bg-[#8CFF45] text-[#393939]"
                : "text-[#AAA] hover:bg-[#2D2B2B]"
            }`}
          >
            {n}
          </button>
        ))}
        {totalPages > 5 && <span className="text-[#AAA] text-xs">...</span>}
      </div>
    </div>
  );
};

export default MainSellerNotification;
