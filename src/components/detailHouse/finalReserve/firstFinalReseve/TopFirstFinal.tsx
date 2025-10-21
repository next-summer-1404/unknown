"use client";

import {
  BuildingOffice2Icon,
  CheckIcon,
  CreditCardIcon,
  DocumentDuplicateIcon,
  TicketIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { useSearchParams } from "next/navigation";
import React from "react";
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

const TopFirstFinal = () => {
  const searchParams = useSearchParams();
  const stepNumber = Number(searchParams.get("step") ?? 1);

  const rtlSteps = [...steps].reverse();
  return (
    <div className="w-11/12 h-16 mx-auto bg-[#393939] rounded-4xl flex items-center justify-between px-6 mt-30">
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
  );
};

export default TopFirstFinal;
