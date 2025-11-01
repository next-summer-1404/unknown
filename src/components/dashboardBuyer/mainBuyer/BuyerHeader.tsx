import React, { useState } from "react";
import Image from "next/image";
import GreenArrow from "../.././../assets/images/greenArrow.png";
import { BellAlertIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import ThemeSwitch from "@/components/dashboard/main/ThemeSwitch";
import BuyerMenuModal from "./BuyerMenuModal";
import { useRouter, usePathname } from "next/navigation";
import { Switch } from "@heroui/react";

const BuyerHeader = () => {
  const [isBuyerMenuModal, setIsBuyerMenuModal] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const isBuyer = pathname.startsWith("/dashboard/buyer");

  const handleSwitchChange = (checked: boolean) => {
    if (checked) {
      router.push("/dashboard/buyer");
    } else {
      router.push("/dashboard/seller");
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
            onClick={() => setIsBuyerMenuModal((prev) => !prev)}
          >
            <p className="text-[#AAAA] flex items-center gap-1">
              سبحان
              <ChevronDownIcon className="w-4 h-4" />
            </p>
          </div>
        </div>

        {isBuyerMenuModal && (
          <BuyerMenuModal onClose={() => setIsBuyerMenuModal(false)} />
        )}

        <div className="flex items-center gap-2 text-[#AAAA] text-[10px] mr-2">
          <p className={isBuyer ? "opacity-60" : "text-[#8CFF45]"}>فروشنده</p>
          <Switch
            isSelected={isBuyer}
            onValueChange={handleSwitchChange}
            color="success"
            size="sm"
            aria-label="switch-role"
            classNames={{
              wrapper: "bg-[#393939] border border-[#555]",
              thumb: "bg-[#8CFF45]",
            }}
          />
          <p className={!isBuyer ? "opacity-60" : "text-[#8CFF45]"}>خریدار</p>
        </div>
      </div>
    </div>
  );
};

export default BuyerHeader;
