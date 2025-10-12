import React, { FC } from "react";
import styles from "./UserCommentCard.module.css";
import { StarIcon } from "@heroicons/react/24/solid";
import { ICommentCardProps } from "@/types/ICommentCardProps";
import Image from "next/image";
import Home from "../../../assets/images/auth1.png";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

const UserCommentCard: FC<ICommentCardProps> = ({
  showUserDetail = false,
  showComment = false,
  bgColor = "#2D2D2D",
}) => {
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
            15.3
          </span>
          <StarIcon className="w-4 h-4 text-black " />
        </div>

        {showComment && (
          <div className="flex items-center gap-1 ">
            <p className="text-white">
              ” لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربرد.... “
            </p>
          </div>
        )}
        {showUserDetail && (
          <div className="flex items-center p-2 h-20 w-full rounded-2xl bg-[#444444]">
         <Image src={Home} alt="" width={100} height={100} className="w-16 h-16 rounded-xl"/>
            <div className="flex flex-col justify-between  w-full h-full px-3 ">
              <h1 className="text-white">محمد رضا ساداتی</h1>
              <div className="flex gap-1 items-center text-[#AAAAAA]">
                <CalendarDaysIcon className="w-5"/>
                <h5 className="pt-1">22 مهر 1404</h5>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCommentCard;
