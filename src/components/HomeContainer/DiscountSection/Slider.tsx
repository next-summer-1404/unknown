'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CommonCard from "@/components/common/CommonCard/CommonCard";
import { IHouses } from "@/types/IHouses";

interface SliderProps {
  Houses: IHouses[];
}
const Slider = ({ Houses }: SliderProps) => {
  console.log(Houses)
  const filteredList = Houses.filter(
  (item) => typeof item.discount_id === "string" && item.discount_id.trim() !== ""
);
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
          className="mySwiper w-full mt-6 "
        >
          {filteredList.map((Item, index) => {
            return (
              <SwiperSlide key={index}>
                <CommonCard
                  showTitle={true}
                  showLocation={true}
                  showDetails={true}
                  showPrice={true}
                  house ={Item}

                />
              </SwiperSlide>
            );
          })}
        </Swiper></>
  )
}

export default Slider
