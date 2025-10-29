"use client";

import { FC, useState } from "react";
import {
  ClipboardDocumentListIcon,
  HomeModernIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import AboutHouse from "./aboutHouse/AboutHouse";
import HouseFacilities from "./houseFacilities/HouseFacilities";
import UserCommentsHouse from "./userCommentsHouse/Index";
import { IHouses } from "@/types/IHouses";

interface BottomBaseDetailProps {
  house: IHouses;
}

const Index: FC<BottomBaseDetailProps> = ({ house }) => {
  const [currentTab, setCurrentTab] = useState("about");

  const tabs = [
    {
      key: "about",
      title: "درباره ملک",
      icon: <HomeModernIcon className="w-5 h-5" />,
    },
    {
      key: "facilities",
      title: "امکانات اقامتگاه",
      icon: <ClipboardDocumentListIcon className="w-5 h-5" />,
    },
    {
      key: "comments",
      title: "نظرات کاربران",
      icon: <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5" />,
    },
  ];

  return (
    <div className="w-4/6 rounded-xl p-4">
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
        {currentTab === "about" && <AboutHouse house={house} />}
        {currentTab === "facilities" && <HouseFacilities house={house} />}
        {currentTab === "comments" && <UserCommentsHouse house={house} />}
      </div>
    </div>
  );
};

export default Index;
