import styles from "./DiscountSection.module.css";
import Image from "next/image";
import GreenArrow from "../../../assets/images/greenArrow.png";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { IHouses } from "@/types/IHouses";
import { getHouses } from "@/utils/service/api/getAllHouses";
import Slider from "./Slider";

const NewPlace = async () => {
  const HouseList = await getHouses();
  const Houses: IHouses[] = HouseList.houses;

  return (
    <div className="bg-[#232323]">
      <div className="flex flex-col items-center justify-center py-20 px-14 rounded-b-[60px] bg-[#2D2D2D]">
        <div className="relative w-full bg-[#232323]  rounded-3xl pb-6 pt-10 py-6">
          <div
            className={`${styles.cardShape} w-10/12 h-9 absolute top-0 left-0 bg-[#2d2d2d] rounded-[0_0_40px_0]`}
          ></div>
          <div className="relative w-full  px-10 ">
            <div className="flex items-center gap-3 mt-5 w-fit">
              <h3 className="text-[#8CFF45] text-sm">جدید ترین نقاط</h3>
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
                <h2 className="text-xl font-light">جدید ترین مناقط تفریحی</h2>
              </div>

              <Link
                href={"/"}
                className="flex justify-between items-center gap-2.5 border-white border-2 rounded-2xl w-fit p-2"
              >
                <h5 className="text-xs w-fit">مشاهده همه</h5>
                <ChevronLeftIcon className="w-5 h-5 " />
              </Link>
            </div>

            <Slider Houses ={Houses}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPlace;
