import { IHouses } from "@/types/IHouses";
import React from "react";
import TopBaseDetail from "./ImageSection/Index";
import BottomBaseDetail from "./InfoAndForm/Index";
import AdvertDetail from "./BottomSlider/Index";

interface Props {
  house: IHouses;
}
const BaseDetail = ({ house }: Props) => {
  return (
    <div className="w-full px-16 pt-20 bg-[#232323]">
      {" "}
      {/* border change */}
      <TopBaseDetail house={house} />
      <BottomBaseDetail house={house} />
      <AdvertDetail house={house} />
    </div>
  );
};

export default BaseDetail;
