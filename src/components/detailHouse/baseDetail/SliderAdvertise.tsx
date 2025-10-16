"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CommonCard from "@/components/common/CommonCard/CommonCard";

interface IHouse {
  id: number;
  name: string;
  image: string;
}
const SliderAdvertise = () => {
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
        slidesPerView={"auto"}
        spaceBetween={30}
        centeredSlides={false}
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
      >
        {Houses.map((Item, index) => {
          return (
            <SwiperSlide key={index}>
              <CommonCard
                rate={"2.3"}
                showSecondTitle={true}
                showLocation={true}
                showSecondDetails={true}
                showThirdPrice={true}
                bgColor={"#232323"}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SliderAdvertise;
