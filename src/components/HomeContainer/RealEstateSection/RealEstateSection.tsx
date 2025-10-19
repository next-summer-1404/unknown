import Image from "next/image";
import GreenArrow from "../../../assets/images/greenArrow.png";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Slider from "./Slider";
import { getHouses } from "@/utils/service/api/getAllHouses";
import { IHouses } from "@/types/IHouses";


const RealEstateSection = async() => {
  const HouseList = await getHouses();
    const Houses: IHouses[] = HouseList.houses;
  return (
    <div className="pb-10 pt-24 bg-[#2d2d2d]">
      <div className="relative w-full bg-[#2D2D2D]  px-10 ">
        <div className="flex items-center gap-3 mt-5 w-fit">
          <h3 className="text-[#8CFF45] text-sm">خونه از خودت میخوای !</h3>
          <Image
            src={GreenArrow}
            width={60}
            height={20}
            alt=""
            className="rotate-180"
          />
        </div>
        <div className="flex justify-between items-center mt-2 text-white">
          <div className="flex items-center">
            <h2 className="text-xl font-light">خرید و فروش ملک در دلتا</h2>
          </div>

          <Link
            href={"/"}
            className="flex justify-between items-center gap-2.5 border-white border-2 rounded-2xl w-fit p-2"
          >
            <h5 className="text-xs w-fit">مشاهده همه</h5>
            <ChevronLeftIcon className="w-5 h-5 " />
          </Link>
        </div>

       <Slider Houses={Houses}/>
      </div>
    </div>
  );
};

export default RealEstateSection;
