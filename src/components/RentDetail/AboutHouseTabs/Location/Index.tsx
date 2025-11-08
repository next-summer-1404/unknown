import { IHouses } from "@/types/IHouses";
import MapRent from "./MapRent";

interface Props {
  house: IHouses;
}

const LocationRent = ({ house }: Props) => {
const Location = house.location
  return (
    <>
      <div className="w-full mt-10 flex gap-5">
        <MapRent Location={Location} />
        <div className="w-[50%] h-auto ">
          <p className="text-sm leading-8 text-[#AAAAAA] p-5">
            {house.caption}
          </p>
        </div>
      </div>
    </>
  );
};

export default LocationRent;
