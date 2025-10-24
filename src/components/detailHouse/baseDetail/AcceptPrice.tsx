"use client";
import { IHouses } from "@/types/IHouses";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  house: IHouses;
}

const AcceptPrice = ({ house }: Props) => {
  const router = useRouter();
  const handleReserveClick = () => {
    router.push(`/houseReserve/${house.id}/finalReserve?step=1`);
  };
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleReserveClick}
        className="bg-[#8CFF45]  font-bold  rounded-2xl w-2/3 m-auto mb-5"
      >
        <p className="text-[#363636] text-md text-center p-1">
          همین الان رزرو کن
        </p>
      </button>
    </div>
  );
};

export default AcceptPrice;
