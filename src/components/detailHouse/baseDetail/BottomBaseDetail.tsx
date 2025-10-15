"use client";

import React from "react";
import { Tabs, Tab } from "@heroui/react";
import {
  ClipboardDocumentListIcon,
  HomeModernIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  BuildingOffice2Icon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import { Card, Button, Input } from "@heroui/react";
import { CalendarDaysIcon, UsersIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import AboutHouse from "../aboutHouse/AboutHouse";
import HouseFacilities from "../houseFacilities/HouseFacilities";
import UserCommentsHouse from "../userCommentsHouse/UserCommentsHouse";

const BottomBaseDetail = () => {
  return (
    <div className="w-11/12 m-auto h-auto flex gap-5 mt-10 border border-white">
      <div className="w-4/6 rounded-xl p-4 border border-amber-300">
        <Tabs
          aria-label="house-detail-tabs"
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
            key="درباره ملک"
            title={
              <div className="flex items-center gap-2">
                <HomeModernIcon className="w-5 h-5" />
                <span>درباره ملک</span>
              </div>
            }
          />
          <Tab
            key="امکانات اقامتگاه"
            title={
              <div className="flex items-center gap-2">
                <ClipboardDocumentListIcon className="w-5 h-5" />
                <span>امکانات اقامتگاه</span>
              </div>
            }
          />
          <Tab
            key="نظرات کاربران"
            title={
              <div className="flex items-center gap-2">
                <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5" />
                <span>نظرات کاربران</span>
              </div>
            }
          />
        </Tabs>
        {/* <AboutHouse/> */}
        {/* <HouseFacilities/> */}
        <UserCommentsHouse/>
      </div>
      {/* */}
      <div className="w-2/6 p-4 rounded-xl">
        <Card className="bg-[#2A2A2A] text-white rounded-2xl  w-full">
          <div className="w-5/6 h-auto m-auto border-b-1 border-[#646464] pb-5">
            <h3 className="font-semibold flex items-center gap-2 mb-4 bg-[#565656] justify-center rounded-b-full  w-2/3 m-auto ">
              <BuildingOffice2Icon className="w-5 h-5 text-white" />
              <p className="text-center leading-12">رزرو خونه برای:</p>
            </h3>

            {/* تاریخ رفت */}
            <Input
              label="تاریخ رفت"
              placeholder="۱۴۰۴/۰۵/۰۲"
              variant="bordered"
              fullWidth
              className="mb-3 text-white"
              startContent={
                <CalendarDaysIcon className="text-[#B3B3B3] w-5 h-5 " />
              }
              classNames={{
                inputWrapper:
                  "border border-[#AAAAAA] bg-[#393939] hover:bg-[#393939] hover:border-[#AAAAAA]  shadow-none",
                input: "text-white placeholder:text-[#B3B3B3]",
                label: "text-[#B3B3B3]",
              }}
            />

            <Input
              label="تاریخ برگشت"
              placeholder="۱۴۰۴/۰۵/۰۷"
              variant="bordered"
              fullWidth
              className="mb-3 text-white"
              startContent={
                <CalendarDaysIcon className="text-[#B3B3B3] w-5 h-5 " />
              }
              classNames={{
                inputWrapper:
                  "border border-[#AAAAAA] bg-[#393939] hover:bg-[#393939] hover:border-[#AAAAAA]  shadow-none",
                input: "text-white placeholder:text-[#B3B3B3]",
                label: "text-[#B3B3B3]",
              }}
            />

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
          <h3 className="font-semibold flex items-center gap-2 mb-4 bg-[#565656] justify-center rounded-b-full  w-1/2 m-auto ">
            <CurrencyDollarIcon className="w-5 h-5 text-white" />
            <p className="text-center leading-12"> قیمت های رزرو</p>
          </h3>
          {/* */}
          <div className="w-5/6 m-auto h-auto border-b-1 border-[#646464]  p-3 grid grid-rows-3 gap-2">
            <div className="grid grid-cols-[20px_auto] items-center gap-2">
              <StarIcon className="w-4 h-4 text-[#AAAAAA]" />
              <p className="text-[#AAAAAA]">۵ شب × ۱۷,۰۰۰,۰۰۰ ت</p>
            </div>

            <div className="grid grid-cols-[20px_auto] items-center gap-2">
              <StarIcon className="w-4 h-4 text-[#AAAAAA]" />
              <p className="text-[#AAAAAA]">۵ شب × ۱۲,۰۰۰,۰۰۰ ت</p>
            </div>

            <div className="grid grid-cols-[20px_auto] items-center gap-2">
              <StarIcon className="w-4 h-4 text-[#AAAAAA]" />
              <p className="text-[#AAAAAA]">۵ شب × ۹,۵۰۰,۰۰۰ ت</p>
            </div>
          </div>
          {/* */}
          <div className="w-5/6 m-auto h-auto flex my-5 ">
            <div className="w-1/2 h-auto"></div>
            <div className="w-1/2 h-auto  flex gap-10 items-center">
              <div className="flex items-center gap-1 ">
                <p className="line-through text-[#AAAAAA] text-md">250000</p>
                <p className="text-md text-[#AAAAAA]">تومان</p>
              </div>
              <div className="w-1/4 h-auto bg-[#FF5555]  rounded-lg  ">
                <p className="text-white text-center ">15%</p>
              </div>
            </div>
          </div>
          <p className="text-[#8CFF45] text-3xl  mr-56 pb-10">1500000 تومان</p>

          <Button className="bg-[#8CFF45]  font-bold  rounded-xl w-2/3 m-auto mb-5">
            <p className="text-[#363636] text-lg">همین الان رزرو کن</p>
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default BottomBaseDetail;
