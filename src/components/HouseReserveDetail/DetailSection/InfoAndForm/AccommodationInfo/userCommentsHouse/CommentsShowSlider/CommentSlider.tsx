"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CommentCard from "./CommentCard";
import { ICommentsData } from "@/types/ICommentCardProps";
import { FC, useEffect, useState } from "react";
import { getComments } from "@/utils/service/api/getComments";

interface houseIdProps {
  houseId: string;
  setReplyCommentData: (data: ICommentsData) => void;
  setCurrentTab: (tab: string) => void;
}
const CommentSlider: FC<houseIdProps> = ({
  houseId,
  setReplyCommentData,
  setCurrentTab,
}) => {
  const [Comments, setComments] = useState<ICommentsData[] | null>(null);

  const getAllComments = async () => {
    const initialResult = await getComments({ page: 1, limit: 1 });
    const total = initialResult.totalCount;

    const allResult = await getComments({
      page: 1,
      limit: total,
      house_id: Number(houseId),
    });
    const Comments = (allResult.data as ICommentsData[]).filter(
      (item) => item.parent_comment_id === null
    );
    setComments(Comments);
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
                Item={Item}
                setReplyCommentData={setReplyCommentData}
                setCurrentTab={setCurrentTab}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default CommentSlider;
