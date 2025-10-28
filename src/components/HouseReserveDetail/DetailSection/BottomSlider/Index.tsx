import {
  BuildingOffice2Icon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";
import SliderAdvertise from "./SliderAdvertise";
import { getHouses } from "@/utils/service/api/getAllHouses";
import { IHouses } from "@/types/IHouses";

interface AdvertDetailProps {
  house: IHouses;
}

const AdvertDetail = async ({ house }: AdvertDetailProps) => {
  const HouseList = await getHouses();
  const Houses: IHouses[] = HouseList.houses;
  // console.log(Houses)

  const mainAddressPart = house.address?.split(" ")[0] ?? "";

  const filtered = Houses.filter(
    (h) =>
      h.id !== house.id &&
      h.transaction_type === house.transaction_type &&
      (h.address?.includes(mainAddressPart) ||
        h.address?.startsWith(mainAddressPart))
  );
   
  return (
    <div className="w-full bg-[#232323]">
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
      <div className="relative py-6">
        <SliderAdvertise Houses={filtered} />
      </div>
    </div>
  );
};

export default AdvertDetail;
