import { HeartIcon } from "@heroicons/react/24/outline";
import React from "react";

const LikeRent = () => {
  return (
    <div className="w-1/2 h-auto p-2 mr-16 mt-5 flex gap-1 justify-end">
      <HeartIcon className="w-10 h-7 text-[#AAAAAA] border border-[#393939] bg-[#393939] ml-5" />
    </div>
  );
};

export default LikeRent;
