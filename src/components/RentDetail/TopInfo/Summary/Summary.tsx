'use client'
import { MapPinIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { IHouses } from "@/types/IHouses";
import { ShareIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import LoginModal from "@/components/common/LogInModal/LogInModal";
import { IAddFavoriteParams } from "@/types/IAddFavoriteParams";
import { AddFavoriteProperty } from "@/utils/service/api/AddFavoriteProperty";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

interface Props {
  house: IHouses;
}

const Summary = ({ house }: Props) => {
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
  return (
    <>
      {" "}
      <div className="flex flex-col pt-7">
        <div className=" flex gap-2 items-center">
          <div className="w-1/8 p-3 border border-[#565656] rounded-2xl flex items-center justify-center bg-[#393939]">
            <p className="text-white ">
              {house?.categories?.name || "بدون دسته‌بندی"}{" "}
            </p>
          </div>
          <div className="w-1/8 p-3 border border-[#565656] rounded-2xl flex items-center justify-center bg-[#393939]">
            <p className="text-white "> ظرفیت:{house?.capacity || 0}</p>
          </div>
          <div className="w-1/8 p-3 border border-[#565656] rounded-2xl flex items-center justify-center bg-[#393939]">
            <p className="text-white ">
              {house?.transaction_type || "رزرو نشده"}
            </p>
          </div>
          <div className="w-0.5 h-6 bg-[#AAAAAA]"></div>
          <div className="w-1/8 p-3 rounded-2xl flex items-center justify-center gap-1 bg-[#7569FF]">
            <StarIcon className="w-5 h-5 text-white" />
            <h6 className="text-white text-center">
              {house?.rate != null ? house.rate : 0}
              ستاره
            </h6>
          </div>
        </div>

        <div className="pt-5">
          <div className=" flex justify-between ">
            <h3 className="text-white text-xl">
              {" "}
              {house?.title || "هتل جدید"}
            </h3>
            <div className="flex items-center justify-center gap-3">
              <div className="h-9 w-9 flex items-center justify-center bg-[#393939] rounded-xl">
                <ShareIcon className="w-6 h-6 text-[#AAAAAA]" />
              </div>

              {house?.isFavorite ? (
                <button
                  // onClick={handleFavorite}
                  className="h-9 w-9 flex items-center justify-center bg-[#393939] rounded-xl cursor-pointer"
                >
                  <HeartIcon className="w-6 h-6 text-red-600" />
                </button>
              ) : (
                <button
                  onClick={handleFavorite}
                  className="h-9 w-9 flex items-center justify-center bg-[#393939] rounded-xl cursor-pointer"
                >
                  <HeartIcon className="w-7 h-7 text-[#AAAAAA]" />
                </button>
              )}
            </div>
          </div>
          <div className="flex gap-1 pt-4">
            <MapPinIcon className="w-5 h-5 text-[#AAAAAA]" />
            <p className="text-[#AAAAAA] text-sm"> {house.address}</p>
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

export default Summary;
