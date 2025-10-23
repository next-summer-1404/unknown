import { PencilSquareIcon, UsersIcon } from "@heroicons/react/24/outline";
import React from "react";

const BookerInfo = () => {
  // این برای تست است
  const travelers = [
    {
      ageRange: "بزرگسال",
      fullName: "علی رضایی",
      gender: "مرد",
      idNumber: "1234567890",
      birthDate: "1370/05/10",
      service: "بیمه مسافرتی",
      servicePrice: "200,000",
      totalPrice: "5,000,000",
    },
    {
      ageRange: "کودک",
      fullName: "زهرا احمدی",
      gender: "زن",
      idNumber: "AB1234567",
      birthDate: "1392/11/22",
      service: "ترنسفر فرودگاهی",
      servicePrice: "150,000",
      totalPrice: "3,200,000",
    },
    {
      ageRange: "نوزاد",
      fullName: "نیما رضایی",
      gender: "مرد",
      idNumber: "N/A",
      birthDate: "1402/01/15",
      service: "بیمه مسافرتی",
      servicePrice: "100,000",
      totalPrice: "800,000",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center gap-3 px-2 py-2  bg-[#393939] rounded-2xl ">
      <div className="w-full flex items-center justify-between p-2 rounded-2xl bg-[#4D4D4D]">
        <div className="flex items-center gap-2">
          <UsersIcon className="w-5 h-5 text-[#FFFFFF]" />
          <p className="text-[#FFFFFF]">مشخصات مسافران</p>
        </div>
        <button className="flex items-center gap-2 text-[#8CFF45] cursor-pointer">
          <PencilSquareIcon className="w-5 h-5" />
          <p className="text-xs">ویرایش مسافران</p>
        </button>
      </div>
      <table className="flex flex-col w-full px-2 ">
        <thead className="">
          <tr className="flex justify-between text-[13px] text-[#AAAAAA] border-b-1 pb-3 ">
            <th className="w-[10%]  h-fit text-start">بازه سنی</th>
            <th className="w-[12%]  h-fit text-start">نام و نام خانوادگی</th>
            <th className="w-[10%]  h-fit text-start">جنسیت</th>
            <th className="w-[14%]  h-fit text-start">شماره ملی/ پاسپورت</th>
            <th className="w-[10%]  h-fit text-start">تاریخ تولد</th>
            <th className="w-[10%]  h-fit text-start">خدمات</th>
            <th className="w-[10%]  h-fit text-start">مبلغ خدمات</th>
            <th className="w-[12%]  h-fit text-end">قیمت</th>
          </tr>
        </thead>
        <tbody>
          {travelers.map((t, index) => (
            <tr
              key={index}
              className="flex justify-between items-center text-[13px] text-[#AAAAAA] h-9 py-2"
            >
              <td className="w-[10%] text-start">{t.ageRange}</td>
              <td className="w-[12%] text-start">{t.fullName}</td>
              <td className="w-[10%] text-start">{t.gender}</td>
              <td className="w-[14%] text-start">{t.idNumber}</td>
              <td className="w-[10%] text-start">{t.birthDate}</td>
              <td className="w-[10%] text-start">{t.service}</td>
              <td className="w-[10%] text-start">{t.servicePrice}</td>
              <td className="w-[12%] text-end">{t.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookerInfo;
