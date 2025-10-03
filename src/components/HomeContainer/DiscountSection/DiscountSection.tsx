import React from "react";
import styles from "./DiscountSection.module.css";
import Image from "next/image";
import GreenArrow from "../../../assets/images/greenArrow.png";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";

const DiscountSection = () => {
  return (
    <section className="border border-amber-50 min-h-44 pt-20 px-5 ">
      <div className="relative w-full min-h-52 bg-[#2D2D2D] rounded-3xl px-6 py-3">
        <div
          className={`${styles.cardShape} w-10/12 h-1/3 absolute top-0 left-0 bg-black rounded-[0_0_40px_0]`}
        ></div>
        <div className="flex justify-center items-center gap-3 rounded-3xl h-10 w-44 mt-0.5 bg-[#FF5555]">
            <div className=""> sssssssssbbbbb</div>
            <ClockIcon className="w-7 h-7"/>
        </div>

        <div className="flex items-center gap-3 mt-5 w-fit">
          <h3 className="text-[#8CFF45] text-sm">بهترین تخفیف</h3>
          <Image
            src={GreenArrow}
            width={60}
            height={20}
            alt=""
            className="rotate-180"
          />
        </div>
        <div className="flex justify-between items-center mt-1.5 text-white">
            <h2 className="text-3xl font-light">پیشنهاد ویژه دلتا</h2>

            <Link href={"/"} className="flex justify-between items-center gap-2.5 border-white border-2 rounded-2xl w-fit p-2">
            <h5 className="text-xs w-fit">مشاهده همه</h5>
            <ChevronLeftIcon  className="w-5 h-5 "/>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
