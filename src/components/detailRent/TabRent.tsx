"use client";

import React from "react";
import { Tabs, Tab } from "@heroui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  ClipboardDocumentListIcon,
  HomeModernIcon,
} from "@heroicons/react/24/outline";
import { IHouses } from "@/types/IHouses";
import AboutHouseRent from "./AboutHouseRent";
import RentFacilities from "./RentFacilities";
import LocationRent from "./LocationRent";
import UserCommentsHouse from "../detailHouse/userCommentsHouse/UserCommentsHouse";
import CommentRent from "./CommentRent";

interface Props {
  house: IHouses;
}

const TabRent: React.FC<Props> = ({ house }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentTab = searchParams.get("tab") || "aboutProperty";

  const handleTabChange = (key: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", key);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <Tabs
      aria-label="house-detail-tabs"
      selectedKey={currentTab}
      onSelectionChange={(key) => handleTabChange(key.toString())}
      size="md"
      variant="solid"
      color="success"
      fullWidth
      classNames={{
        tabList: "bg-[#3A3A3A] rounded-xl p-1 flex justify-start mt-10 w-full",
        tab: [
          "rounded-xl font-semibold text-sm transition-all duration-200",
          "data-[selected=true]:bg-[#8CFF45] data-[selected=true]:text-black",
          "data-[selected=false]:bg-transparent data-[selected=false]:text-[#B0B0B0]",
          "hover:text-white hover:bg-[#4A4A4A] ",
        ],
        tabContent: "flex items-center gap-2",
      }}
    >
      <Tab
        key="aboutProperty"
        title={
          <div className="flex items-center gap-2">
            <HomeModernIcon className="w-5 h-5" />
            <span>توضیحات ملک</span>
          </div>
        }
      >
        <AboutHouseRent house={house} />

      </Tab>

      <Tab
        key="facilityProperty"
        title={
          <div className="flex items-center gap-2">
            <ClipboardDocumentListIcon className="w-5 h-5" />
            <span>امکانات ملک</span>
          </div>
        }
      >
        <RentFacilities house={house} />
      </Tab>

      <Tab
        key="location"
        title={
          <div className="flex items-center gap-2">
            <ClipboardDocumentListIcon className="w-5 h-5" />
            <span>موقعیت ملک</span>
          </div>
        }
      >
        <LocationRent house={house} />
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
        <CommentRent house={house} />
      </Tab>
    </Tabs>
  );
};

export default TabRent;
