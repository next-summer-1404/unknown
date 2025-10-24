import React from "react";
import { IHouses } from "@/types/IHouses";
import { getHouseDetail } from "@/utils/service/api/getHouseDetail";
import BaseDetailRent from "@/components/detailRent/BaseDetailRent";

interface Props {
  params: { id: string };
}

const RentDetailPage = async ({ params }: Props) => {
  const house: IHouses = await getHouseDetail(params.id);
  // console.log("dbbbbbbbbb:", params.id);
  

  return <BaseDetailRent house={house} />;
};

export default RentDetailPage;
