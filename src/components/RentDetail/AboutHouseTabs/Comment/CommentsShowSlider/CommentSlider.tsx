"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// import { IHouses } from "@/types/IHouses";
import CommentCard from "./CommentCard";
import { FC, useEffect, useState } from "react";
import { getComments } from "@/utils/service/api/getComments";
import { ICommentsData } from "@/types/ICommentCardProps";

interface houseIdProps {
  houseId: string;
}
const CommentSlider: FC<houseIdProps> = ({ houseId }) => {
  const [Comments, setComments] = useState<ICommentsData[] | null>(null);

  // console.log(Comments);
  const getAllComments = async () => {
    const initialResult = await getComments({ page: 1, limit: 1 });
    const total = initialResult.totalCount;

    const allResult = await getComments({
      page: 1,
      limit: total,
      house_id: Number(houseId),
    });
    setComments(allResult.data);
  };

  useEffect(() => {
    getAllComments();
  }, []);

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
        {Comments?.map((Item, index) => {
          return (
            <SwiperSlide key={index}>
              <CommentCard 
              Item={Item}/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default CommentSlider;
