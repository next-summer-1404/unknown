"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CommonCard from "@/components/common/CommonCard/CommonCard";

const Slider = () => {
      const slide = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];
  return (
    <>
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
          1044: { slidesPerView: 3 },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-11/12 mt-6 "
      >
        {slide.map((Item, index) => {
          return (
            <SwiperSlide key={index}>
              <CommonCard 
            //   id={Item.id} 
              showItemNumber={true} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slider;
