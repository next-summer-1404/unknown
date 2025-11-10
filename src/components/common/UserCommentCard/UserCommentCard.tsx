"use client";
import React, { FC, useEffect, useState } from "react";
import styles from "./UserCommentCard.module.css";
import { StarIcon } from "@heroicons/react/24/solid";
import { ICommentCardProps, ICommentsData } from "@/types/ICommentCardProps";
import Image from "next/image";
import Home from "../../../assets/images/auth1.png";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { DateChange } from "@/utils/helper/DateChange";
import { getUserPublic } from "@/utils/service/api/getUserPublic";
import { UserPublicTypes } from "@/types/UserPublicTypes ";
interface IProps extends ICommentCardProps {
  Item: ICommentsData;
}
const UserCommentCard: FC<IProps> = ({
  showUserDetail = false,
  showComment = false,
  bgColor = "#2D2D2D",
  Item,
}) => {
  const [user, setUser] = useState<UserPublicTypes["user"] | null>(null);
  const caption = Item?.caption;
  const created_at = Item?.created_at ?? "";
  const house_id = Item?.house_id ?? "N/A";
  const id = Item?.id ?? "";
  const parent_comment_id = Item?.parent_comment_id ?? "N/A";
  const rating = Item?.rating ?? "";
  const title = Item?.title ?? "N/A";
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
    user?.profilePicture.trim() !== ""
      ? user?.profilePicture
      : Home;

  console.log(user);
  return (
    <div className="w-full flex flex-col  pt-2.5 flex-shrink-0">
      <div className="relative flex flex-col gap-7 w-full bg-[#393939]  rounded-3xl px-6 pt-3 pb-6">
        <div
          className={`${styles.cardShape} w-2/3 md:w-9/12 lg:w-10/12 h-9 absolute top-0 left-0 rounded-[0_0_40px_0]`}
          style={
            {
              backgroundColor: bgColor,
              "--shape-color": bgColor,
            } as CSSWithVars //global.d.ts
          }
        ></div>
        <div className="flex items-center justify-center gap-1.5 w-16 h-8 bg-white rounded  ">
          <span className="text-md font-medium text-black leading-none mt-1">
            {rating}
          </span>
          <StarIcon className="w-4 h-4 text-black " />
        </div>

        {showComment && (
          <div className="flex items-center gap-1 ">
            <p className="text-white">{caption}</p>
          </div>
        )}
        {showUserDetail && (
          <div className="flex items-center p-2 h-20 w-full rounded-2xl bg-[#444444]">
            <Image
              src={imageSrc}
              alt={user?.name || ""}
              width={100}
              height={100}
              className="w-16 h-16 rounded-xl"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = Home.src;
              }}
            />
            <div className="flex flex-col justify-between  w-full h-full px-3 ">
              <h1 className="text-white">{user?.name}</h1>
              <div className="flex gap-1 items-center text-[#AAAAAA]">
                <CalendarDaysIcon className="w-5" />
                <h5 className="pt-1">{DateChange(created_at)}</h5>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCommentCard;
