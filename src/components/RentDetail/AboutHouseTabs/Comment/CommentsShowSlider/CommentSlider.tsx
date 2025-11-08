"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { IHouses } from "@/types/IHouses";
import CommentCard from "./CommentCard";

interface SliderProps {
  Houses: IHouses[];
}
const CommentSlider = (/*{ Houses }: SliderProps*/) => {
const Houses = [{id:1}, {id:2}, {id:2}, {id:2}, {id:2}]

  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        centeredSlides={false}
        breakpoints={{
          320: { slidesPerView: 1 },
          490: { slidesPerView: 1 },
          780: { slidesPerView: 2 },
          1044: { slidesPerView: 2 },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {Houses.map((Item, index) => {
          return (
            <SwiperSlide key={index} >
              <CommentCard />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default CommentSlider;
