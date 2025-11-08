import { IHouses } from "@/types/IHouses";
import React from "react";
import TabRent from "./AboutHouseTabs/TabRent";
import AdvertHouseRent from "./SimilarProperty/AdvertHouseRent";
import TopInfo from "./TopInfo/Index";

interface Props {
  house: IHouses;
}

const Index: React.FC<Props> = ({ house }) => {
  return (
    <div className="px-16 pt-30 w-full">
      <TopInfo house={house} />
      <TabRent house={house} />
      <AdvertHouseRent house={house} />
    </div>
  );
};

export default Index;
