import React from "react";
import BaseDetail from "../../../../components/detailHouse/baseDetail/baseDetail";
import { getHouseDetail } from "../../../../utils/service/api/getHouseDetail"; 
import { IHouses } from "@/types/IHouses";

interface Props {
  params: { id: string };
}

const HouseDetailPage = async ({ params }: Props) => {
  const house: IHouses = await getHouseDetail(params.id);

  return (
    <div>
      <BaseDetail house={house} />
    </div>
  );
};

export default HouseDetailPage;
