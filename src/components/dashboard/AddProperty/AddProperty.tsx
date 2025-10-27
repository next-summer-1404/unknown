import Image from "next/image";
import React from "react";
import GreenArrow from "../.././../assets/images/greenArrow.png";

const AddProperty = () => {
  return (
    <div className="h-[394px] bg-[#393939] rounded-2xl">
      <div className="flex items-center justify-between px-8 py-3">
        <p className="text-[#AAA] text-[16px]">ساخت آگهی ملک جدید</p>
        <div className="flex items-center gap-2">
          <p className="text-[#8CFF45] text-[16px]">لیست املاک من</p>
          <Image
            src={GreenArrow}
            width={50}
            height={16}
            alt=""
            className="rotate-0 text-[#AAAA] "
          />
        </div>
      </div>
      <div className="border-t border-dashed border-gray-300  mb-[2px]" />
    </div>
  );
};

export default AddProperty;
