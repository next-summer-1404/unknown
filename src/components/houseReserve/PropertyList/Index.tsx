import { FC } from "react";
import CardReserve from "../PropertyCard/CardReserve";
import { IHouses } from "@/types/IHouses";

interface PropertyListProps {
  filteredHouses: IHouses[];
  setSelectedHouse: React.Dispatch<React.SetStateAction<IHouses | null>>;
}
const PropertyList: FC<PropertyListProps> = ({
  filteredHouses,
  setSelectedHouse,
}) => {
  return (
    <div className="w-full overflow-y-auto">
      {filteredHouses.length ? (
        filteredHouses.map((house) => (
          <CardReserve
            key={house.id}
            house={house}
            onSelect={() => setSelectedHouse(house)}
          />
        ))
      ) : (
        <p className="text-gray-400 text-center mt-10">
          هیچ نتیجه‌ای یافت نشد.
        </p>
      )}
    </div>
  );
};

export default PropertyList;
