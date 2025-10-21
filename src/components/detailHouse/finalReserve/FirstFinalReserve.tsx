"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import {
  CheckIcon,
  UserGroupIcon,
  DocumentDuplicateIcon,
  CreditCardIcon,
  TicketIcon,
  BuildingOffice2Icon,
  StarIcon,
  LockClosedIcon,
  MapPinIcon,
  CalendarDaysIcon,
  BuildingOfficeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    id: 1,
    title: "انتخاب هتل",
    icon: <BuildingOffice2Icon className="w-5 h-5" />,
  },
  {
    id: 2,
    title: "مشخصات مسافران",
    icon: <UserGroupIcon className="w-5 h-5" />,
  },
  {
    id: 3,
    title: "تایید اطلاعات",
    icon: <DocumentDuplicateIcon className="w-5 h-5" />,
  },
  {
    id: 4,
    title: "پرداخت آنلاین",
    icon: <CreditCardIcon className="w-5 h-5" />,
  },
  { id: 5, title: "صدور بلیط", icon: <TicketIcon className="w-5 h-5" /> },
];

const FirstFinalReserve = () => {
  const searchParams = useSearchParams();
  const stepNumber = Number(searchParams.get("step") ?? 1);

  const rtlSteps = [...steps].reverse();

  return (
    <div className="w-full h-[1000px] border border-amber-400 mt-20">
      {/* نوار بالای مراحل رزرو */}
      <div className="w-11/12 h-16 mx-auto bg-[#393939] rounded-4xl flex items-center justify-between px-6">
        <div className="flex flex-row-reverse w-full justify-between items-center text-sm text-[#cccccc]">
          {rtlSteps.map((step, i) => {
            const isActive = step.id === stepNumber;
            const isDone = step.id < stepNumber;

            return (
              <div key={step.id} className="flex items-center gap-2">
                {/* دایره آیکون هر مرحله */}
                <div
                  className={`flex justify-center items-center w-8 h-8 rounded-full border-2 transition-all ${
                    isActive
                      ? "bg-[#8CFF45] text-black border-[#8CFF45]"
                      : isDone
                      ? "border-[#8CFF45] text-[#8CFF45]"
                      : "border-[#5c5c5c] text-[#AAAAAA]"
                  }`}
                >
                  {isDone ? <CheckIcon className="w-5 h-5" /> : step.icon}
                </div>

                {/* عنوان مرحله */}
                <p
                  className={`min-w-max ${
                    isActive ? "text-[#8CFF45]" : "text-[#AAAAAA]"
                  }`}
                >
                  {step.title}
                </p>

                {/* خط بین مراحل */}
                {i < steps.length - 1 && (
                  <div
                    className={`border-t-2 border-dashed w-16 ${
                      isDone ? "border-[#8CFF45]" : "border-[#5c5c5c]"
                    }`}
                  ></div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-11/12 mx-auto mt-10 h-40 bg-[#393939]  rounded-2xl  text-center text-white flex">
        <div className="w-1/3 flex">
          <div className="w-1/3 border border-red-700 rounded-2xl h-30 mt-5 mr-3"></div>
          <div className="w-2/3">
            <div className="w-18 h-8 rounded-2xl mr-5 bg-[#7569FF] flex items-center gap-1 mt-3 p-1">
              <StarIcon className="w-5 h-5" />
              <p>ستاره</p>
            </div>
            <p className="text-right text-xl leading-14 mr-5 font-semibold">
              هتل سراوان رانین رشت
            </p>
            <div className="flex items-center">
              <MapPinIcon className="w-5 h-5 mr-3" />
              <p className="text-sm text-[#AAAAAA] font-light">
                آدرس : گیلان ، رشت ، میدان آزادی ....
              </p>
            </div>
          </div>
        </div>
            <div className="w-1/3 h-30 my-auto border-l border-r border-[AAAAAA">
        <div className="w-full p-2  flex items-center gap-1 mt-5">
            <CalendarDaysIcon className="w-5 h-5 text-[#AAAAAA]"/>
            <p className="text-[#AAAAAA] font-light text-sm">تاریخ ورود:</p>
        </div>
        <div className="w-full p-2  flex items-center gap-1">
            <CalendarDaysIcon className="w-5 h-5 text-[#AAAAAA]"/>
            <p className="text-[#AAAAAA] font-light text-sm">تاریخ خروج:</p>
        </div>
        </div>
        <div className="w-1/3 ">
          <div className=" mt-10 flex items-center gap-5 mr-15">
            <p className="text-[#AAAAAA]  line-through">25000000</p>
            <p className="px-3 py-1 rounded-xl bg-red-400 text-sm ">32%</p>
            <p className="text-[#8CFF45]">15000000 تومان</p>
          </div>
          <div className="border h-10 mr-60 rounded-2xl border-[#8CFF45] ml-5 mt-5 flex items-center gap-1 p-2 justify-center">
            <BuildingOfficeIcon className="w-5 h-5 text-[#8CFF45]"/>
            <button className="text-[#8CFF45] text-sm text-center">تغییر هتل</button>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto mt-10 h-40 bg-[#393939]  rounded-2xl ">
          <div className="p-2 rounded-2xl bg-[#4D4D4D] flex gap-1 items-center">
            <UsersIcon className="w-5 h-5 mr-2 text-[#FFFFFF]"/>
            <p className="text-[#FFFFFF]">مشخصات مسافران</p>
          </div>
          
          
      </div>
    </div>
  );
};

export default FirstFinalReserve;
