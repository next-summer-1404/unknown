import Image from "next/image";
import styleCard from "./HouseReserve.module.css";
import styles from "./ImgSection.module.css";
import testImg from "../../../assets/images/auth1.png";
import { StarIcon } from "@heroicons/react/24/solid";
import {
  BuildingOffice2Icon,
  ChevronLeftIcon,
  HomeIcon,
  HomeModernIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const CardRent = () => {
  return (
    <div className="relative flex w-[49%] h-44 rounded-2xl bg-[#393939] p-3 group">
      <div
        className={`${styleCard.cardShape} absolute top-0 left-0 w-9/12 h-7 z-20 bg-[#232323] rounded-[0_0_40px_0]`}
      ></div>
      <div className="relative  w-[28%] h-full rounded-2xl overflow-hidden">
        <div
          className={`${styles.cardShape} absolute top-0 left-0 w-3/12 h-6 z-0 bg-[#393939] rounded-[0_0_20px_0] `}
        ></div>
        <Image src={testImg} alt="" width={200} className="w-full h-full" />
      </div>
      <div className="flex flex-col h-full w-[72%] pt-7 pr-2 overflow-hidden">
        <div className="w-full flex justify-between">
          <div className="flex items-center justify-center gap-1 w-20 h-7 bg-[#7569FF] rounded ">
            <StarIcon className="w-5 h-5 text-white" />
            <span className="text-[13px] text-white  mt-1">2 ستاره</span>
          </div>
          {/* این قسمت شرطی است. مثلا اگر تخفیف داشت نشون بده در غیر اینصورت خالی باشه */}
          <div className="flex items-center gap-1.5">
            <span className="relative text-[#AAAAAA] text-sm">
              100000 ت
              <span className="absolute left-0 top-[35%] w-full h-[2px] bg-[#AAAAAA] rotate-[-8deg]"></span>
            </span>
            <span className="h-fit w-12 bg-[#FF5555] text-[12px] text-white rounded pt-0.5 px-2">
              100%
            </span>
            {/*  */}
          </div>
        </div>
        <div className=" w-full flex-1 flex justify-between">
          <div className="h-full flex flex-col gap-2 justify-end">
            <h3 className="text-white">هتل سراوان رانین رشت</h3>
            <div className="flex items-center text-xs">
              <MapPinIcon className="w-5 h-5 text-[#AAAAAA]" />
              <span className="text-[#AAAAAA]">آدرس:</span>
              <span className="text-white">
                {" "}
                گیلان ، رشت ، میدان آزادی ، ..
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-1">
                <HomeModernIcon className="text-[#AAAAAA] w-4 h-4" />
                <span className="text-xs font-normal text-[#AAAAAA]">
                  4خوابه
                </span>
              </div>
              <div className="bg-[#AAAAAA] w-0.5 h-3"></div>
              <div className="flex items-center gap-1">
                <BuildingOffice2Icon className="text-[#AAAAAA] w-4 h-4" />
                <span className="text-xs font-normal text-[#AAAAAA]">
                  1پارکینگ
                </span>
              </div>
              <div className="bg-[#AAAAAA] w-0.5 h-3"></div>
              <div className="flex items-center gap-1">
                <HomeIcon className="text-[#AAAAAA] w-4 h-4" />
                <span className="text-xs font-normal text-[#AAAAAA]">2حمام</span>
              </div>
            </div>
          </div>
          <div className=" h-full flex flex-col gap-3 justify-end items-end">
            <h1 className="text-2xl text-[#8CFF45]">1000022 ت</h1>
            <Link
            href={"/"}
            className="flex justify-between items-center border-[#8CFF45] border rounded-md w-fit p-2 px-4 group-hover:bg-[#8CFF45]"
          >
            <h5 className="text-xs text-[#8CFF45] group-hover:text-black w-fit">مشاهده همه</h5>
            <ChevronLeftIcon className="w-4 h-4 text-[#8CFF45] group-hover:text-black" />
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRent;
