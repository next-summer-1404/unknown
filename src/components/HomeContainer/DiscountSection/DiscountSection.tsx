"use client";
import React from "react";
import styles from "./DiscountSection.module.css";
import Image from "next/image";
import GreenArrow from "../../../assets/images/greenArrow.png";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CommonCard from "@/components/common/CommonCard/CommonCard";

const DiscountSection = () => {
  const slide = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];
  return (
    <section className="flex flex-col h-fit pt-20 px-5 bg-[#232323]">
      <div className="relative w-full bg-[#2D2D2D] rounded-3xl px-6 pt-3 pb-6">
        <div
          className={`${styles.cardShape} w-10/12 h-16 absolute top-0 left-0 bg-[#232323] rounded-[0_0_40px_0]`}
        ></div>
        <div className="flex justify-center items-center gap-3 rounded-3xl h-10 w-44 mt-0.5 bg-[#FF5555]">
          <div className=""> sssssssssbbbbb</div>
          <ClockIcon className="w-7 h-7" />
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

          <Link
            href={"/"}
            className="flex justify-between items-center gap-2.5 border-white border-2 rounded-2xl w-fit p-2"
          >
            <h5 className="text-xs w-fit">مشاهده همه</h5>
            <ChevronLeftIcon className="w-5 h-5 " />
          </Link>
        </div>

        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          centeredSlides={false}
          // put in center of swiper
          // slidesOffsetBefore={20}
          // slidesOffsetAfter={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            490: { slidesPerView: 1 },
            780: { slidesPerView: 2 },
            1044: { slidesPerView: 3},
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-full mt-6 "
        >
          {slide.map((Item, index) => {
            return (
              <SwiperSlide key={index}>
                <CommonCard id={Item.id} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default DiscountSection;
