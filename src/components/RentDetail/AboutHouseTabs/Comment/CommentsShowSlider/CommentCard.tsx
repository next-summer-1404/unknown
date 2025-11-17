"use client";
import React, { FC, useEffect, useState } from "react";
import styles from "./CommentCard.module.css";
import { StarIcon } from "@heroicons/react/24/solid";
import { ICommentCardProps, ICommentsData } from "@/types/ICommentCardProps";
import Image from "next/image";
import Home from "../../../../../assets/images/auth1.png";
import {
  CalendarDaysIcon,
  ChatBubbleBottomCenterTextIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";
import { DateChange } from "@/utils/helper/DateChange";
import { UserPublicTypes } from "@/types/UserPublicTypes ";
import { getUserPublic } from "@/utils/service/api/getUserPublic";

interface IProps extends ICommentCardProps {
  Item: ICommentsData;
  setReplyCommentData: (data: ICommentsData) => void;
  setCurrentTab: (tab: string) => void;
}

const CommentCard: FC<IProps> = ({
  showUserDetail = true,
  showComment = true,
  showReplySign = false,
  bgColor = "#232323",
  Item,
  setReplyCommentData,
  setCurrentTab,
}) => {
  const [user, setUser] = useState<UserPublicTypes["user"] | null>(null);
  const caption = Item?.caption;
  const created_at = Item?.created_at ?? "";
  // const house_id = Item?.house_id ?? "N/A";
  // const id = Item?.id ?? "";
  // const parent_comment_id = Item?.parent_comment_id ?? "N/A";
  const rating = Item?.rating ?? "";
  // const title = Item?.title ?? "N/A";
  const user_id = Item?.user_id ?? "";

  const GetUserInfo = async () => {
    try {
      const result = await getUserPublic(user_id);
      setUser(result.user);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user_id) {
      GetUserInfo();
    }
  }, [user_id]);

  const imageSrc =
    typeof user?.profilePicture === "string" &&
    user?.profilePicture.trim() !== "" &&
    /^(https?:\/\/|\/|data:image\/)/i.test(user.profilePicture.trim()) // ← تصویر معتبر هست یا نه
      ? user?.profilePicture
      : Home;
  return (
    <div className="w-full flex flex-col  pt-2.5 flex-shrink-0">
      <div className="relative flex flex-col  w-full bg-[#393939]  rounded-3xl px-4 pt-2 pb-3">
        <div
          className={`${styles.cardShape} w-2/3 md:w-9/12 lg:w-9/12 h-9 absolute top-0 left-0 rounded-[0_0_40px_0]`}
          style={
            {
              backgroundColor: bgColor,
              "--shape-color": bgColor,
            } as CSSWithVars //global.d.ts
          }
        ></div>
        <div className="flex items-center justify-center gap-1.5 w-16 h-7 bg-white rounded-xl  ">
          <span className="text-md font-medium text-black leading-none mt-1">
            {rating}
          </span>
          <StarIcon className="w-4 h-4 text-black " />
        </div>

        {showComment && (
          <div className="flex items-center gap-1 py-4">
            <p className="text-white text-[12px] line-clamp-2">{caption}</p>
          </div>
        )}
        {showReplySign && (
          <>
            <div className="w-full flex justify-between items-center gap-4 pb-2">
              <div className="h-10 w-24 flex justify-center items-center gap-1.5 bg-[#7569FF] rounded-2xl">
                <ChatBubbleBottomCenterTextIcon className="w-4 h-4 text-white" />
                <h6 className="text-white text-[10px]">پاسخ کاربران</h6>
              </div>
              <div className="flex-1 h-0.5 bg-white bg-gradient-to-r from-[#393939] via-white"></div>
            </div>
            <div className="flex flex-col gap-2 pb-4">
              <div className="flex items-center gap-1.5 w-full  ">
                <h1 className="text-white text-[13px]">محمد رضا ساداتی</h1>
                <div className="h-3 w-0.5 bg-white"></div>
                <div className="flex gap-1 items-center text-[#AAAAAA] text-[13px]">
                  <CalendarDaysIcon className="w-4 h-4" />
                  <h5 className="">22 مهر 1404</h5>
                </div>
              </div>
              <p className="text-white text-[12px] line-clamp-2">
                ” لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربرد.... “
              </p>
            </div>
          </>
        )}

        {showUserDetail && (
          <div className="flex items-center p-2 h-14 w-full rounded-2xl bg-[#444444]">
            <Image
              src={imageSrc}
              alt={user?.name || ""}
              width={100}
              height={100}
              className="w-12 h-12 rounded-xl"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = Home.src;
              }}
            />
            <div className="flex flex-col justify-between  w-fit h-full px-3 ">
              <h1 className="text-white text-[13px]">{user?.name}</h1>
              <div className="flex gap-1 items-center text-[13px] text-[#AAAAAA]">
                <CalendarDaysIcon className="w-4" />
                <h5 className="pt-1">{DateChange(created_at)}</h5>
              </div>
            </div>
            <button
              onClick={() => {
                setReplyCommentData(Item);
                setCurrentTab("commentReply");
              }}
              className="mr-auto mt-auto flex items-center justify-center gap-1 w-20 h-7 cursor-pointer border border-white rounded-xl"
            >
              <h4 className="text-[11px] text-white">ثبت پاسخ</h4>
              <ChevronLeftIcon className="w-4 h-4 text-white" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentCard;
