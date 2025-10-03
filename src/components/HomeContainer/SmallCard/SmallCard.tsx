import Image, { StaticImageData } from "next/image";
import styles from "./SmallCard.module.css";
import Arrow from "../../../assets/images/Arrow.svg";
import { StarIcon } from "@heroicons/react/24/solid";
import { FC } from "react";
type SmallCardProps = {
  title: string;
  image: StaticImageData;
};
const SmallCard: FC<SmallCardProps> = ({ title, image }) => {
  return (
    <div className="relative w-52 h-20 bg-[#2E2E2E] hover:bg-[#8CFF45] text-white hover:text-black rounded-3xl cursor-pointer">
      <div
        className={`${styles.cardShape} w-7/12 h-1/3 absolute top-0 left-0 bg-black rounded-[0_0_20px_0]`}
      >
        <Image
          src={Arrow}
          width={20}
          alt=""
          className="absolute left-0 top-1"
        />
      </div>
      <Image
        src={image}
        width={45}
        height={60}
        alt=""
        className="bg-[#393939CF] p-1.5 absolute right-5 -top-5 rounded-xl"
      />
      <div className="absolute top-1/2 flex justify-center items-center w-full gap-1.5  ">
        <StarIcon className="w-3 h-3" />
        <h2 className=" ">{title}</h2>
        <StarIcon className="w-3 h-3" />
      </div>
    </div>
  );
};

export default SmallCard;
