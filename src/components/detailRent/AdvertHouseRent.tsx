import {
  BuildingOffice2Icon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";
import { getHouses } from "@/utils/service/api/getAllHouses";
import { IHouses } from "@/types/IHouses";
import SliderAdvertise from "../HouseReserveDetail/baseDetail/SliderAdvertise";
import SimilarAdSlider from "./Slider/SimilarAdSlider";

interface AdvertHouseRentProps {
  house: IHouses;
}

const AdvertHouseRent = async ({ house }: AdvertHouseRentProps) => {
  const HouseList = await getHouses();
  const Houses: IHouses[] = HouseList.houses;

  const mainAddressPart = house.address?.split(" ")[0] ?? "";
  const filtered = Houses.filter(
    (h) =>
      h.id !== house.id &&
      h.transaction_type === house.transaction_type &&
      (h.address?.includes(mainAddressPart) ||
        h.address?.startsWith(mainAddressPart))
  );
  // console.log(filtered);

  return (
    <div className="w-full bg-[#232323] pt-30">
      <div className="w-full h-10 bg-[#393939] rounded-2xl flex justify-between items-center p-3">
        <div className="flex gap-1">
          <BuildingOffice2Icon className="w-5 h-5 text-white" />
          <p className="text-white">آگهی های مشابه</p>
        </div>
        <div className="flex gap-3 cursor-pointer">
          <p className="text-[#8CFF45]"> مشاهده همه</p>
          <ChevronLeftIcon className="w-5 h-5 text-[#8CFF45]" />
        </div>
      </div>
      <div className="relative py-6 ">
        {filtered.length > 0 ? (
          <SimilarAdSlider Houses={filtered} />
        ) : (
          <p className="text-center text-white text-2xl font-bold">
            مورد مشابهی وجود ندارد
          </p>
        )}
      </div>
    </div>
  );
};

export default AdvertHouseRent;
