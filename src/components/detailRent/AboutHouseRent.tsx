import { IHouses } from "@/types/IHouses";
import React from "react";
import AdvertHouseRent from "./AdvertHouseRent";

interface Props {
  house: IHouses;
}

const AboutHouseRent = ({ house }: Props) => {
  return (
    <>
      <div className="w-11/12 mx-auto h-auto mt-5 ">
        <p className="text-[#AAAAAA] text-sm leading-8">
          {house?.caption?.trim()
            ? house.caption
            : "هیچ مطلبی درباره ملک ارائه نشده است"}
        </p>
      </div>
      <AdvertHouseRent />
    </>
  );
};

export default AboutHouseRent;
