import { IHouses } from "@/types/IHouses";
import "react-multi-date-picker/styles/layouts/mobile.css";
import BookingCard from "./BookingCardForm/Index";
import Accommodation from "./AccommodationInfo/Index";
import { FC } from "react";
interface BottomBaseDetailProps {
  house: IHouses;
}

const BottomBaseDetail: FC<BottomBaseDetailProps> = ({ house }) => {
  return (
    <div className="w-full flex gap-5 py-10">
      <Accommodation house={house} />

      <BookingCard house={house} />
    </div>
  );
};

export default BottomBaseDetail;
