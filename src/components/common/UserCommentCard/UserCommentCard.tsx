import React, { FC } from "react";
import styles from "./UserCommentCard.module.css";
import { StarIcon } from "@heroicons/react/24/solid";
import { ICommentCardProps } from "@/types/ICommentCardProps";

const UserCommentCard: FC<ICommentCardProps> = ({
  showUserDetail = false,
  showComment = false,

  bgColor = "#2D2D2D",
}) => {
  return (
    <div className="w-full flex flex-col  pt-2.5 flex-shrink-0 group">
      <div className="relative flex flex-col gap-7 w-full h-60 bg-[#393939] group-hover:bg-[#8CFF45] rounded-3xl px-6 pt-3 pb-6">
        <div
          className={`${styles.cardShape} w-2/3 h-9 absolute top-0 left-0 rounded-[0_0_40px_0]`}
          style={
            {
              backgroundColor: bgColor,
              "--shape-color": bgColor,
            } as CSSWithVars //global.d.ts
          }
        ></div>
        <div className="flex items-center justify-center gap-1.5 w-16 h-8 bg-white rounded group-hover:bg-[#2D2D2D] ">
          <span className="text-md font-medium text-black group-hover:text-white leading-none mt-1">
            15.3
          </span>
          <StarIcon className="w-4 h-4 text-black group-hover:text-white" />
        </div>

        {showComment && (
          <div className="flex items-center gap-1">
            <p className="text-white">
              ” لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربرد.... “
            </p>
          </div>
        )}
        {showUserDetail && (
          <div className="flex items-center justify-between">
         
            
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCommentCard;
