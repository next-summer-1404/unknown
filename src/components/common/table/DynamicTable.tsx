'use client';
import React, { useState, useEffect } from "react";
import {
  EllipsisVerticalIcon,
  PencilSquareIcon,
  TrashIcon,
  EyeIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import BookingDetailsModal from "./../../dashboard/bookingManagement/BookingDetailsModal";

export type Column = {
  key: string;
  label: string;
};

export type Row = {
  key: string | number;
  [key: string]: any;
};

export type DynamicTableProps = {
  title?: string;
  columns: Column[];
  rows: Row[];
  withActions?: boolean;
  addButtonText?: string;
  onAddClick?: () => void;
};

const statusColor: Record<"فعال" | "در انتظار" | "غیرفعال", string> = {
  فعال: "bg-[#8CFF45] text-[#0E0E0E]",
  "در انتظار": "bg-[#FFC107] text-[#0E0E0E]",
  غیرفعال: "bg-[#FF4556] text-white",
};

const DynamicTable: React.FC<DynamicTableProps> = ({
  title,
  columns,
  rows,
  withActions = false,
  addButtonText,
  onAddClick,
}) => {
  const [menuOpen, setMenuOpen] = useState<number | string | null>(null);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const menu = document.querySelector(".table-action-menu");
      if (menu && !menu.contains(e.target as Node)) {
        setMenuOpen(null);
      }
    };
    if (menuOpen !== null) {
      window.addEventListener("click", handleOutsideClick);
    }
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [menuOpen]);

  return (
    <>
      <div className="bg-[#393939] mt-8 text-[#AAA] rounded-xl p-5 border border-[#333] shadow-md h-auto">
        {title && (
          <>
            <div className="text-right text-[#AAA] text-base font-semibold mb-4">
              {title}
            </div>
            <div className="border-t border-dashed border-[#4B4B4B] mb-4" />
          </>
        )}

        <div className="overflow-auto rounded-xl border border-[#333]">
          <table className="w-full border-collapse text-sm text-right">
            <thead>
              <tr className="bg-[#2D2B2B] text-[#AAA] border-b border-dashed border-[#444]">
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className="py-3 px-4 font-normal whitespace-nowrap"
                  >
                    {col.label}
                  </th>
                ))}
                {withActions && <th className="text-center py-3">عملیات</th>}
              </tr>
            </thead>

            <tbody>
              {rows.map((item) => (
                <tr
                  key={item.key}
                  className="border-b border-dashed border-[#444] hover:bg-[#2a2a2a] transition"
                >
                  {columns.map((col) => (
                    <td key={col.key} className="py-3 px-4 whitespace-pre-wrap break-words">
                      {typeof item[col.key] === "string" ||
                      typeof item[col.key] === "number" ? (
                        col.key === "status" &&
                        (item.status === "فعال" ||
                          item.status === "در انتظار" ||
                          item.status === "غیرفعال") ? (
                          <span
                            className={`flex items-center gap-1 text-xs px-3 py-1 rounded-full font-semibold w-fit ${
                              statusColor[
                                item.status as keyof typeof statusColor
                              ]
                            }`}
                          >
                            {item.status}
                            {item.status === "فعال" && (
                              <CheckCircleIcon className="w-3 h-3" />
                            )}
                          </span>
                        ) : (
                          item[col.key]
                        )
                      ) : (
                        item[col.key]
                      )}
                    </td>
                  ))}

                  {withActions && (
                    <td className="relative text-center">
                      <button
                        className="p-1 rounded-full hover:bg-[#222] transition"
                        onClick={(e) => {
                          e.stopPropagation();
                          setMenuOpen(menuOpen === item.key ? null : item.key);
                        }}
                      >
                        <EllipsisVerticalIcon className="w-5 h-5 text-[#AAA]" />
                      </button>

                      {menuOpen === item.key && (
                        <div
                          className="table-action-menu absolute left-20 -translate-x-1/2 bottom-[-12]
                                     mt-2 z-[999] bg-[#393939] border border-[#333] rounded-xl
                                     shadow-lg p-2 w-[130px] text-xs"
                        >
                          <button className="flex items-center gap-2 text-[#8CFF45] hover:bg-[#222] w-full px-2 py-1 rounded-md transition">
                            فعال‌سازی
                          </button>

                          <button className="flex items-center gap-2 hover:bg-[#222] w-full px-2 py-1 rounded-md transition">
                            <PencilSquareIcon className="w-4 h-4 text-[#AAA]" />
                            ویرایش
                          </button>

                          <button className="flex items-center gap-2 text-[#FF4556] hover:bg-[#222] w-full px-2 py-1 rounded-md transition">
                            <TrashIcon className="w-4 h-4" />
                            حذف
                          </button>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedRow(item);
                              setShowModal(true);
                              setMenuOpen(null);
                            }}
                            className="flex items-center gap-2 hover:bg-[#222] w-full px-2 py-1 rounded-md transition"
                          >
                            <EyeIcon className="w-4 h-4 text-[#AAA]" />
                            مشاهده
                          </button>
                        </div>
                      )}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {addButtonText && (
          <div className="flex justify-start items-center mt-4">
            <button
              onClick={onAddClick}
              className="bg-[#8CFF45] text-[#393939] rounded-2xl px-6 py-2 font-semibold hover:bg-[#aaff6b] transition"
            >
              {addButtonText}
            </button>
          </div>
        )}
      </div>

      {/* 🔹 مدال جزئیات رزرو */}
      <BookingDetailsModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setSelectedRow(null);
        }}
        data={selectedRow}
      />
    </>
  );
};

export default DynamicTable;
