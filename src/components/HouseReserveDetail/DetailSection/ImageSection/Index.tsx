"use client";
import {
  ArrowUturnUpIcon,
  ClipboardIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Slider from "./Slider";
import { IHouses } from "@/types/IHouses";
import Link from "next/link";
import { CheckBadgeIcon, StarIcon } from "@heroicons/react/24/solid";
import LoginModal from "@/components/common/LogInModal/LogInModal";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { IAddFavoriteParams } from "@/types/IAddFavoriteParams";
import toast from "react-hot-toast";
import { AddFavoriteProperty } from "@/utils/service/api/AddFavoriteProperty";

interface TopBaseDetailProps {
  house: IHouses;
}

const TopBaseDetail = ({ house }: TopBaseDetailProps) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  
  const router = useRouter();
  const houseId = Number(house.id);
  const userId = Number(Cookies.get("userId")) || null;

  const handleFavorite = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId) {
      setShowLoginModal(true);
      return;
    }
    const payload: IAddFavoriteParams = {
      house_id: houseId,
      user_id: userId,
    };
    try {
      const result = await AddFavoriteProperty(payload);
      toast.success("به لیست مورد علاقه‌ها اضافه شد.");
    } catch (err) {
      console.error(err);
    }
  };
  // const houseData = await getHouseDetail(id)

  return (
    <>
      {" "}
      <div className="w-full flex justify-between">
        <div className="w-[77%] h-auto ">
          <p className="text-white text-xl font-bold p-2">{house.title}</p>
          <div className="flex items-center gap-1 mx-2 py-4">
            <MapPinIcon className="w-4 h-4 text-[#AAAAAA]" />
            <p className="text-[#AAAAAA] text-sm font-medium">
              آدرس: {house.address}
            </p>
          </div>
          <div className="w-full h-[444px] rounded-xl overflow-hidden bg-[#393939] mb-20">
            <Slider house={house} />
          </div>
        </div>
        <div className="w-[21%] flex flex-col items-center gap-6 pt-8">
          <div className="flex items-center justify-center gap-3 ">
            <div className="flex items-center justify-center gap-1 px-3 py-2 rounded-xl bg-[#7569FF] text-white text-sm font-semibold  transition">
              {house.rate ? (
                <>
                  <StarIcon className="w-4 h-4 text-white" />
                  {house.rate}
                  <h5>ستاره</h5>
                </>
              ) : (
                <p className="text-center ">بدون امتیاز</p>
              )}
            </div>
            <div className="w-[1px] h-6 bg-[#555] mx-2" />

            {house?.isFavorite ? (
              <button
                // onClick={handleFavorite}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#2F2F2F] border border-[#444] hover:bg-[#3A3A3A] transition cursor-pointer"
              >
                <CheckBadgeIcon className="w-6 h-6 text-[#8cff45]" />
              </button>
            ) : (
              <button
                onClick={handleFavorite}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#2F2F2F] border border-[#444] hover:bg-[#3A3A3A] transition cursor-pointer"
              >
                <ClipboardIcon className="w-5 h-5 text-[#AAAAAA]" />
              </button>
            )}

            <Link
              href={"/houseReserve"}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#8CFF45] transition"
            >
              <ArrowUturnUpIcon className="w-5 h-5 bg-[#8CFF45]" />
            </Link>
          </div>
          <div className="w-fit grid grid-cols-2 gap-5">
            <div className="h-25 w-25 bg-[#393939] rounded-2xl"></div>
            <div className="h-24 w-24 bg-[#393939] rounded-2xl"></div>
            <div className="h-24 w-24 bg-[#393939] rounded-2xl"></div>
            <div className="h-24 w-24 bg-[#393939] rounded-2xl"></div>
            <div className="h-24 w-24 bg-[#393939] rounded-2xl"></div>
            <div className="h-24 w-24 bg-[#393939] rounded-2xl"></div>
            <div className="h-24 w-24 bg-[#393939] rounded-2xl"></div>
            <div className="h-24 w-24 bg-[#393939] rounded-2xl"></div>
          </div>
        </div>
      </div>
      <LoginModal
        isOpen={showLoginModal}
        onConfirm={() => router.push("/login")}
        onCancel={() => setShowLoginModal(false)}
      />
    </>
  );
};

export default TopBaseDetail;
