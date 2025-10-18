import React from "react";
import BaseDetail from "../../../../components/detailHouse/baseDetail/baseDetail";
import { getHouseDetail } from "../../../../utils/service/api/getHouseDetail";
import { IHouses } from "@/types/IHouses";

interface Props {
  params: { id: string };
}

const HouseDetailPage = async ({ params }: Props) => {
  const house: IHouses = await getHouseDetail(params.id);

<<<<<<< HEAD
  return <BaseDetail house={house} />;
=======
  return (
    <div className="">
      <BaseDetail house={house} />
    </div>
  );
>>>>>>> 145ac20d35225e73c2192690bd24ebbe0d3082ba
};

export default HouseDetailPage;
