"use client";

import { useState } from "react";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  ClipboardDocumentListIcon,
  HomeModernIcon,
} from "@heroicons/react/24/outline";
import { IHouses } from "@/types/IHouses";
import AboutHouseRent from "./AboutHouse/AboutHouseRent";
import RentFacilities from "./HouseFacilities/HouseFacilities";
import LocationRent from "./Location/Index";
import CommentRent from "./Comment/CommentRent";

interface Props {
  house: IHouses;
}

const TabRent: React.FC<Props> = ({ house }) => {
  const [currentTab, setCurrentTab] = useState("aboutProperty");

  const tabs = [
    {
      key: "aboutProperty",
      title: "توضیحات ملک",
      icon: <HomeModernIcon className="w-5 h-5" />,
    },
    {
      key: "facilityProperty",
      title: "امکانات ملک",
      icon: <ClipboardDocumentListIcon className="w-5 h-5" />,
    },
    {
      key: "location",
      title: "موقعیت ملک",
      icon: <ClipboardDocumentListIcon className="w-5 h-5" />,
    },
    {
      key: "userComments",
      title: "نظرات کاربران",
      icon: <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5" />,
    },
  ];

  return (
    <div className="w-full rounded-xl py-6">
      <div className="flex bg-[#3A3A3A] rounded-xl p-1 gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setCurrentTab(tab.key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-200
              ${
                currentTab === tab.key
                  ? "bg-[#8CFF45] text-black"
                  : "bg-transparent text-[#B0B0B0]"
              }
              hover:bg-[#4A4A4A] hover:text-white hover:cursor-pointer
            `}
          >
            {tab.icon}
            <span>{tab.title}</span>
          </button>
        ))}
      </div>
      {/* محتوای تب */}
      <div className="mt-4">
        {currentTab === "aboutProperty" && <AboutHouseRent house={house} />}
        {currentTab === "facilityProperty" && <RentFacilities house={house} />}
        {currentTab === "location" && <LocationRent house={house} />}
        {currentTab === "comments" && <CommentRent house={house} />}
      </div>
    </div>
  );
};

export default TabRent;
