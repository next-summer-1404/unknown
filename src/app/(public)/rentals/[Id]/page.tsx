import React from "react";
import { IHouses } from "@/types/IHouses";
import { getHouseDetail } from "@/utils/service/api/getHouseDetail";
import RentDetail from "@/components/RentDetail/Index";

interface Props {
  params: { id: string };
}

const RentDetailPage = async ({ params }: Props) => {
  const house: IHouses = await getHouseDetail(params.id);
  // console.log("dbbbbbbbbb:", params.id);
  

  return <RentDetail house={house} />;
};

export default RentDetailPage;
