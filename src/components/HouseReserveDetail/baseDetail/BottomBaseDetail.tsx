"use client";

import React, { useState } from "react";
import { Tabs, Tab} from "@heroui/react";
import {
  ClipboardDocumentListIcon,
  HomeModernIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import AboutHouse from "../aboutHouse/AboutHouse";
import HouseFacilities from "../houseFacilities/HouseFacilities";
import UserCommentsHouse from "../userCommentsHouse/UserCommentsHouse";
import { IHouses } from "@/types/IHouses";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import "react-multi-date-picker/styles/layouts/mobile.css";
import BookingCard from "./BookingCard";

interface BottomBaseDetailProps {
  house: IHouses;
}

const BottomBaseDetail: React.FC<BottomBaseDetailProps> = ({ house }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentTab = searchParams.get("tab") || "aboutProperty";

  const handleTabChange = (key: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("tab", key);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });

  };

  return (
    <div className="w-11/12 m-auto h-auto flex gap-5 mt-10">
      <div className="w-4/6 rounded-xl p-4">
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
            <AboutHouse house={house} />
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
            <HouseFacilities house={house} />
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
            <UserCommentsHouse house={house} />
          </Tab>
        </Tabs>
      </div>

      <div className="w-2/6 p-4 rounded-xl">
        <BookingCard house={house}/>
      </div>
    </div>
  );
};

export default BottomBaseDetail;
