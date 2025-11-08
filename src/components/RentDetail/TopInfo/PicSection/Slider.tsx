"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Slider.module.css";
import Image from "next/image";
import Change from "../../../../assets/images/auth1.png";
import { IHouses } from "@/types/IHouses";

interface SliderProps {
  house: IHouses;
}

const Slider = ({ house }: SliderProps) => {
  // console.log(house.photos)
  const photos = house.photos?.filter((p) => p?.trim() && p.trim() !== "") || [];

  const displayPhotos = photos.length > 0 ? photos : [""];
  // const displayPhotos = [{ id: 1 }, { id: 1 }, { id: 1 }];
  console.log(displayPhotos)

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
        {displayPhotos.map((Item, index) => {
          return (
            <SwiperSlide
              key={index}
              className=""
            >
              <Image
                // اگر مقدار ایمیج استرینگ خالی، نال یا اندیفایند بود از تصویر جایگزین استفاده می کنه
                src={Item?.trim() ? Item : Change}
                // src={Change}
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
