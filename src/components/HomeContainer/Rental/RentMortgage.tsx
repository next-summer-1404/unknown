"use client";

import Image from "next/image";
import GreenArrow from "../../../assets/images/greenArrow.png";

import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Slider from "./Slider";
import SliderTwo from "./SliderTwo";
import { IHouses } from "@/types/IHouses";
interface IProps {
  Houses: IHouses[];
}
const RentMortgage = ({ Houses }: IProps) => {
  const [activeTab, setActiveTab] = useState<"rent" | "mortgage">("rent");

  const rentData = Houses.filter((item) => item.transaction_type === "rental");
  const mortgageData = Houses.filter((item) => item.transaction_type === "mortgage");
  
  const currentData = activeTab === "rent" ? rentData : mortgageData;

  return (
    <div className="bg-[#232323] pt-11">
      <div className="relative flex flex-col pb-13 bg-[#2D2D2D] w-full shadow-[0px_12px_32px_0px_#00000014] rounded-b-[60px] overflow-hidden">
        <div className="flex flex-col gap-2 items-center justify-center mt-24">
          <div className="h-fit flex flex-col justify-center items-center gap-6 text-white">
            <div className="h-fit flex justify-center items-center gap-5 ">
              <Image src={GreenArrow} width={60} height={70} alt="" />
              <h3 className=" text-center text- font-bold text-[#8CFF45]">
                مقصد رویاها
              </h3>
              <Image
                src={GreenArrow}
                width={60}
                height={70}
                alt=""
                className="rotate-180"
              />
            </div>
            <h3 className="text-2xl">اجاره ویلا در محبوب ترین مقاصد این ماه</h3>
            <h3 className="">
              در اینجا می توانید محبوب ترین مقصدها را از بین انتخاب کاربران
              مشاهده کنید و آن ها بررسی کنید !
            </h3>
          </div>

          <Slider />
        </div>

        <div className="relative w-full bg-[#2D2D2D] mt-24 px-11 ">
          <div className="flex items-center gap-3 mt-5 w-fit">
            <h3 className="text-[#8CFF45] text-sm">با هر مبلغی خونه دار شو</h3>
            <Image
              src={GreenArrow}
              width={60}
              height={20}
              alt=""
              className="rotate-180"
            />
          </div>
          <div className="flex justify-between items-center mt-2 text-white">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-light">رهن و اجاره ملک در دلتا</h2>
              <div className="bg-white w-0.5 h-3 mb-1"></div>
              <div className="bg-[#393939] backdrop-blur-[12px] w-40 h-9 rounded flex items-center justify-center gap-1 px-1 py-1">
                <button
                  type="button"
                  value="rent"
                  onClick={() => setActiveTab("rent")}
                  className={`w-1/2 h-11/12 text-md rounded cursor-pointer ${
                    activeTab === "rent"
                      ? "text-black bg-[#8CFF45]"
                      : "text-[#8C8C8C]"
                  }`}
                >
                  اجاره ملک
                </button>
                <button
                  type="button"
                  value="mortgage"
                  onClick={() => setActiveTab("mortgage")}
                  className={`w-1/2 h-11/12 text-md rounded cursor-pointer ${
                    activeTab === "mortgage"
                      ? "text-black bg-[#8CFF45]"
                      : "text-[#8C8C8C]"
                  }`}
                >
                  رهن خونه
                </button>
              </div>
            </div>

            <Link
              href={"/"}
              className="flex justify-between items-center gap-2.5 border-white border-2 rounded-2xl w-fit p-2"
            >
              <h5 className="text-xs w-fit">مشاهده همه</h5>
              <ChevronLeftIcon className="w-5 h-5 " />
            </Link>
          </div>

          <SliderTwo Houses={currentData} />
        </div>
      </div>
    </div>
  );
};

export default RentMortgage;
