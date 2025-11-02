"use client";
import React, { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import Image from "next/image";
import GreenArrow from "../.././../assets/images/greenArrow.png";
import { BellAlertIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import UserMenuModal from "./UserMenuModal";
import { Switch } from "@heroui/react";
import { useRouter, usePathname } from "next/navigation";

const DashboardHeader = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const isSeller = pathname.startsWith("/dashboard/seller");

  const handleSwitchChange = (checked: boolean) => {
    if (checked) {
      router.push("/dashboard/seller");
    } else {
      router.push("/dashboard/buyer");
    }
  };

  return (
    <div className="w-full rounded-2xl h-16 bg-[#393939] flex items-center">
      <div className="w-2/3 flex items-center justify-between p-5">
        <p className="flex items-center gap-2 text-[#AAAA] text-md">
          داشبورد
          <Image
            src={GreenArrow}
            width={50}
            height={16}
            alt=""
            className="rotate-180 text-[#AAAA]"
          />
        </p>
        <ThemeSwitch />
      </div>

      <div className="w-1/3 border-r p-2 border-[#AAA] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <BellAlertIcon className="w-5 h-5 text-[#AAAA]" />
          <div
            className="flex flex-col items-center cursor-pointer select-none"
            onClick={() => setIsUserMenuOpen((prev) => !prev)}
          >
            <p className="text-[#AAAA] flex items-center gap-1">
              سبحان
              <ChevronDownIcon className="w-4 h-4" />
            </p>
          </div>
        </div>

        {isUserMenuOpen && (
          <UserMenuModal onClose={() => setIsUserMenuOpen(false)} />
        )}
      </div>
    </div>
  );
};

export default DashboardHeader;
