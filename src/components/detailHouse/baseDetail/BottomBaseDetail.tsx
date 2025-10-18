"use client";

import React, { useState } from "react";
import { Tabs, Tab } from "@heroui/react";
import {
  ClipboardDocumentListIcon,
  HomeModernIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";
import { Card, Button, Input } from "@heroui/react";
import { CalendarDaysIcon, UsersIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import AboutHouse from "../aboutHouse/AboutHouse";
import HouseFacilities from "../houseFacilities/HouseFacilities";
import UserCommentsHouse from "../userCommentsHouse/UserCommentsHouse";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import PriceReserve from "./PriceReserve";
import { IHouses } from "@/types/IHouses";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

interface BottomBaseDetailProps {
  house: IHouses;
}

const BottomBaseDetail: React.FC<BottomBaseDetailProps> = ({ house }) => {
  const [startDate, setStartDate] = useState<DateObject | null>(null);
  const [endDate, setEndDate] = useState<DateObject | null>(null);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentTab = searchParams.get("tab") || "aboutProperty";

  const handleTabChange = (key: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("tab", key);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="w-11/12 m-auto h-auto flex gap-5 mt-10 border border-white">
      <div className="w-4/6 rounded-xl p-4 border border-amber-300">
        <Tabs
          aria-label="house-detail-tabs"
          selectedKey={currentTab}
          onSelectionChange={(key) => handleTabChange(key.toString())}
          size="md"
          variant="solid"
          color="success"
          fullWidth
          classNames={{
            tabList: "bg-[#3A3A3A] rounded-xl p-1 flex justify-start",
            tab: [
              "rounded-xl font-semibold text-sm transition-all duration-200",
              "data-[selected=true]:bg-[#8CFF45] data-[selected=true]:text-black",
              "data-[selected=false]:bg-transparent data-[selected=false]:text-[#B0B0B0]",
              "hover:text-white hover:bg-[#4A4A4A]",
            ],
            tabContent: "flex items-center gap-2",
          }}
        >
          <Tab
            key="aboutProperty"
            title={
              <div className="flex items-center gap-2">
                <HomeModernIcon className="w-5 h-5" />
                <span>درباره ملک</span>
              </div>
            }
          >
            <div>
              <AboutHouse house={house} />
            </div>
          </Tab>

          <Tab
            key="facilityProperty"
            title={
              <div className="flex items-center gap-2">
                <ClipboardDocumentListIcon className="w-5 h-5" />
                <span>امکانات اقامتگاه</span>
              </div>
            }
          >
            <div>
              <HouseFacilities house={house} />
            </div>
          </Tab>

          <Tab
            key="userComments"
            title={
              <div className="flex items-center gap-2">
                <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5" />
                <span>نظرات کاربران</span>
              </div>
            }
          >
            <div>
              <UserCommentsHouse />
            </div>
          </Tab>
        </Tabs>
      </div>
      {/* */}
      <div className="w-2/6 p-4 rounded-xl">
        <Card className="bg-[#2A2A2A] text-white rounded-2xl w-full ">
          <div className="flex flex-col w-5/6 h-auto m-auto border-b-1 border-[#646464] pb-5">
            <h3 className="font-semibold flex items-center gap-2 mb-4 bg-[#565656] justify-center rounded-b-full  w-2/3 m-auto ">
              <BuildingOffice2Icon className="w-5 h-5 text-white" />
              <p className="text-center leading-12">رزرو خونه برای:</p>
            </h3>

            {/* تاریخ رفت */}

            <div className="w-full relative flex flex-col">
              <label
                htmlFor="username"
                className="absolute right-3 -top-2 bg-[#2A2A2A] px-1 text-white text-sm"
              >
                تاریخ ورود:
              </label>

              <DatePicker
                calendar={persian}
                locale={persian_fa}
                placeholder="وارد کنید..."
                value={startDate}
                onChange={(date) => setStartDate(date)}
                className="w-full"
                inputClass="w-full border border-blue-300 text-white rounded-xl h-16 px-3 py-3 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="w-full relative mt-5 flex flex-col">
              <label
                htmlFor="username"
                className="absolute right-3 -top-2 bg-[#2A2A2A] px-1 text-white text-sm"
              >
                تاریخ خروج:
              </label>
              <DatePicker
                calendar={persian}
                locale={persian_fa}
                placeholder="وارد کنید..."
                value={endDate}
                onChange={(date) => setEndDate(date)}
                className="w-full"
                inputClass="w-full border border-gray-300 text-white rounded-xl h-16 px-3 py-3 focus:border-blue-500 focus:outline-none"
              />
            </div>

            {/* */}
            <div className="flex items-center justify-between mt-4 mb-4 text-sm border border-[#AAAAAA] rounded-2xl p-3">
              <span className="flex items-center gap-2">
                <UsersIcon className="w-5 h-5" /> تعداد مسافران:
              </span>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  className="bg-[#8CFF45] text-black font-bold rounded-lg"
                >
                  +
                </Button>
                <span>۲ نفر</span>
                <Button
                  size="sm"
                  className="bg-[#8CFF45] text-black font-bold rounded-lg"
                >
                  -
                </Button>
              </div>
            </div>
          </div>
          {/* */}

          <PriceReserve house={house} />
        </Card>
      </div>
    </div>
  );
};

export default BottomBaseDetail;
