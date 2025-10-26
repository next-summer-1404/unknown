import React from "react";
import {
  ArrowRightCircleIcon,
  HomeIcon,
  UserIcon,
  PlusCircleIcon,
  WalletIcon,
  ChatBubbleLeftRightIcon,
  BellIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const menuItems = [
  { label: "داشبورد", icon: HomeIcon },
  { label: "اطلاعات کاربری", icon: UserIcon },
  { label: "مدیریت رزرو", icon: PlusCircleIcon },
  { label: "مدیریت مالی", icon: WalletIcon },
  { label: "مدیریت نظرها", icon: ChatBubbleLeftRightIcon },
  { label: "اعلان‌ها", icon: BellIcon },
];

export default function SideMain() {
  return (
    <div className="w-[270px] h-[775px] bg-[#393939] rounded-2xl flex flex-col overflow-hidden">
      <Link href={'/'} className="flex items-center justify-between px-5 h-[60px] shrink-0">
        <p className="font-bold text-[#AAAAAA] text-[20px] leading-none">دلتا</p>
        <ArrowRightCircleIcon className="w-6 h-6 text-[#AAAAAA]" />
      </Link>

      <div className="flex-1 flex flex-col justify-start">
        {menuItems.map((item, i) => (
          <button
            key={i}
            className="flex items-center gap-3 px-6 h-[45px] text-[15px] font-medium text-[#AAAAAA] "
          >
            <item.icon className="w-5 h-5 text-[#AAAAAA]" />
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      <div className="px-4 h-[90px] flex flex-col justify-center items-center">
        <div className="border border-[#AAAAAA]/40 w-full rounded-xl py-3 flex flex-col items-center">
          <button className="flex items-center gap-2 text-[#AAAAAA] text-[15px]">
            <DocumentTextIcon className="w-5 h-5" />
            <span className="font-medium">نظرات جدید</span>
          </button>
          <p className="text-[#AAAAAA] text-sm mt-1">۵ نظر</p>
        </div>
      </div>
    </div>
  );
}
