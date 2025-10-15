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
    <div className="w-full h-auto border border-red-500">
      <TopBaseDetail />
      <BottomBaseDetail />
     <AdvertDetail/>
    </div>
  );
};

export default BaseDetail;
