'use client';
import React, { useState } from 'react';
import {
  EllipsisVerticalIcon,
  PencilSquareIcon,
  TrashIcon,
  EyeIcon,
} from '@heroicons/react/24/outline';

const statusColor: Record<'فعال' | 'در انتظار' | 'غیرفعال', string> = {
  فعال: 'bg-[#8CFF45] text-[#393939]',
  'در انتظار': 'bg-[#FFC107] text-[#393939]',
  غیرفعال: 'bg-[#FF4556] text-[#393939]',
};

const properties = [
  {
    id: 1,
    name: 'هتل ساران زمین رشت',
    price: '۸,۸۰۰,۰۰۰ تومان',
    score: '۴ از ۵',
    visits: 25,
    bookings: 5,
    status: 'فعال',
  },
  {
    id: 2,
    name: 'هتل ساران زمین رشت',
    price: '۸,۸۰۰,۰۰۰ تومان',
    score: '۴ از ۵',
    visits: 15,
    bookings: 3,
    status: 'در انتظار',
  },
  {
    id: 3,
    name: 'هتل ساران زمین رشت',
    price: '۸,۸۰۰,۰۰۰ تومان',
    score: '۴ از ۵',
    visits: 12,
    bookings: 2,
    status: 'غیرفعال',
  },
];

export default function PropertyTable() {
  const [menuOpen, setMenuOpen] = useState<number | null>(null);

  return (
    <div className="bg-[#393939] mt-10 text-[#AAA] rounded-xl p-4 border border-[#393939] shadow-md">
      {/* جدول */}
      <div className="overflow-auto rounded-xl border border-[#333] p-5">
        <table className="w-full border-collapse text-sm text-right">
          <thead>
            <tr className="text-[#AAA] border-b border-dashed border-[#AAA] bg-[#2d2b2b] rounded-2xl  ">
              <th className="p-3 font-normal">نام اقامتگاه</th>
              <th className="font-normal">قیمت</th>
              <th className="font-normal">امتیاز</th>
              <th className="font-normal">بازدیدها</th>
              <th className="font-normal">رزروها</th>
              <th className="font-normal">وضعیت</th>
              <th className="font-normal text-center">عملیات</th>
            </tr>
          </thead>

          <tbody>
            {properties.map((item) => (
              <tr
                key={item.id}
                className="border-b border-dashed border-[#333] hover:bg-[#2d2b2b] transition"
              >
                <td className="py-3">{item.name}</td>
                <td>{item.price}</td>
                <td>{item.score}</td>
                <td>{item.visits}</td>
                <td>{item.bookings}</td>

                {/* بیج وضعیت */}
                <td>
                  <span
                    className={`flex items-center gap-1 text-xs px-3 py-1 rounded-full font-semibold w-fit ${
                      statusColor[item.status as keyof typeof statusColor]
                    }`}
                  >
                    {item.status}
                    {item.status === 'فعال' && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        className="w-3 h-3"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414L9 14.414l-3.707-3.707a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </span>
                </td>

                {/* منوی عملیات */}
                <td className="text-center relative">
                  <button
                    className="p-1 rounded-full hover:bg-[#222] transition"
                    onClick={() =>
                      setMenuOpen(menuOpen === item.id ? null : item.id)
                    }
                  >
                    <EllipsisVerticalIcon className="w-5 h-5 text-[#AAA]" />
                  </button>

                  {menuOpen === item.id && (
                    <div className="absolute left-[45%] bottom-10 z-10 bg-[#1a1a1a] border border-[#333] rounded-xl shadow-lg p-2 w-[130px] text-xs">
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
                      <button className="flex items-center gap-2 hover:bg-[#222] w-full px-2 py-1 rounded-md transition">
                        <EyeIcon className="w-4 h-4 text-[#AAA]" />
                        مشاهده
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* پایین جدول (pagination + افزودن ملک) */}
      <div className="flex justify-between items-center mt-4">

        <button className="bg-[#8CFF45] text-[#393939] rounded-2xl px-6 py-2 font-semibold hover:bg-[#aaff6b] transition">
          افزودن ملک +
        </button>
      </div>
    </div>
  );
}
