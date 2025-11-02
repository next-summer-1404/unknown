import React from "react";
import UserCommentsHouse from "../HouseReserveDetail/DetailSection/InfoAndForm/AccommodationInfo/userCommentsHouse/Index";
import { IHouses } from "@/types/IHouses";
import AdvertHouseRent from "./AdvertHouseRent";

interface Props {
  house: IHouses;
}

const CommentRent = ({ house }: Props) => {
  return (
    <div className="w-full mt-10 border-4 border-blue-400">
      <UserCommentsHouse house={house} />
    </div>
  );
};

export default CommentRent;
