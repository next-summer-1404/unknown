import { IHouses } from "@/types/IHouses";
import React, { useState } from "react";
import AdvertHouseRent from "./AdvertHouseRent";
import MapRent from "./MapRent";

interface Props {
  house: IHouses;
}

const LocationRent = ({ house }: Props) => {
  const [selectedHouse, setSelectedHouse] = useState<IHouses | null>(null);

  return (
    <>
      <div className="w-11/12 mx-auto mt-10 flex gap-5">
        <MapRent selectedHouse={selectedHouse} />
        <div className="w-1/2 h-auto ">
          <p className="text-sm leading-8 text-[#AAAAAA] p-5">
            {house.caption}
          </p>
        </div>
      </div>
      <AdvertHouseRent />
    </>
  );
};

export default LocationRent;
