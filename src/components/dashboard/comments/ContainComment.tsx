"use client";
import React from "react";
import TableComments from "./TableComments";

const ContainComment = () => {
  return (
    <div className="p-3 text-right h-auto bg-red-200  rounded-2xl ">
      <div className="h-20 flex items-center justify-between">
        <p className="w-1/2 font-[500] text-xl text-[#AAA]">
          لیست نظرات
        </p>       
      </div>

      <div className="border-t border-dashed border-[#555] mt-2" />
      <TableComments/>

    </div>
  );
};

export default ContainComment;
