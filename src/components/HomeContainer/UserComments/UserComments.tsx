"use client";
import Image from "next/image";
import GreenArrow from "../../../assets/images/greenArrow.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import UserCommentCard from "@/components/common/UserCommentCard/UserCommentCard";

const UserComments = () => {
  const slide = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];
  return (
    <div className="bg-[#232323] py-24 w-full flex flex-col gap-8">
      <div className="h-fit flex flex-col justify-center items-center gap-6 text-white">
        <div className="h-fit flex justify-center items-center gap-5 ">
          <Image src={GreenArrow} width={60} height={70} alt="" />
          <h3 className=" text-center text- font-bold text-[#8CFF45]">
            نظرات کاربران
          </h3>
          <Image
            src={GreenArrow}
            width={60}
            height={70}
            alt=""
            className="rotate-180"
          />
        </div>
        <h3 className="text-2xl">رضایت شما اعتبار و ارزش دلتا را می سازد !</h3>
        <h3 className="">
          تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های املاکی سعی دارد
          تا بتواند در تمام لحظات کنار شما باشد .
        </h3>
      </div>
      <div className="px-14 ">
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
          className=" w-full mt-6"
        >
          {slide.map((Item, index) => {
            return (
              <SwiperSlide key={index}>
                <UserCommentCard
                  id={Item.id}
                  showUserDetail={true}
                  showComment={true}
                  bgColor={"#232323"}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default UserComments;
