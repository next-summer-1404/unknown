"use client";
import LoginModal from "@/components/common/LogInModal/LogInModal";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Cookies from "js-cookie";

interface Props {
  houseId: string | number;
  onReserve: () => void;
}

const AcceptPrice = ({ houseId, onReserve }: Props) => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const router = useRouter();

  const userId = Number(Cookies.get("userId")) || null;
  const handleClick = () => {
    if (!userId) {
      setShowLoginModal(true);
      return;
    }
    onReserve();
  };
  return (
    <>
      <div className="flex items-center justify-center w-1/2">
        <button
          onClick={handleClick}
          className="w-full px-3 py-1 bg-[#8CFF45] font-bold rounded-2xl  cursor-pointer"
        >
          <h3 className="text-[#363636] text-md text-center p-1">
            همین الان رزرو کن
          </h3>
        </button>
      </div>
      <LoginModal
        isOpen={showLoginModal}
        onConfirm={() => router.push("/login")}
        onCancel={() => setShowLoginModal(false)}
      />
    </>
  );
};

export default AcceptPrice;
