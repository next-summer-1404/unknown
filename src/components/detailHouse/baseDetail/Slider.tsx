"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Slider.module.css";
import Image from "next/image";
import Change from "../../../assets/images/auth1.png";

interface IHouse {
  id: number;
  name: string;
  image:string ;
}

const Slider = () => {
  const Houses: IHouse[] = [
    { id: 1, name: "slider1", image: "" },
    { id: 1, name: "slider1", image: "" },
    { id: 1, name: "slider1", image: "" },
    { id: 1, name: "slider1", image: "" },
    { id: 1, name: "slider1", image: "" },
  ];
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={`swiper mySwiper ${styles.mySwiper} w-full h-full`}
      >
        {Houses.map((Item, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
              // اگر مقدار ایمیج استرینگ خالی، نال یا اندیفایند بود از تصویر جایگزین استفاده می کنه
                src={Item.image?.trim() ? Item.image : Change}
                alt=""
                width={500}
                height={500}
                className="w-full h-full"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slider;
