import { IHouses } from "@/types/IHouses";
import React from "react";
import TopBaseDetail from "./TopBaseDetail";
import BottomBaseDetail from "./BottomBaseDetail";
import AdvertDetail from "./AdvertDetail";

interface Props {
  house: IHouses;
}
const BaseDetail = ({ house }: Props) => {
  return (
    <div className="w-full bg-[#232323]  border border-[#232323]">
      {" "}
      {/* border change */}
      <TopBaseDetail house={house} />
      <BottomBaseDetail house={house} />
      <AdvertDetail house={house} />


    </div>
  );
};

export default BaseDetail;
