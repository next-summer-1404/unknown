import { IHouses } from "@/types/IHouses";
import Image from "next/image";
import React from "react";
import auth1 from "../../../assets/images/auth1.png";

interface AboutHouseProps {
  house: IHouses;
}

const AboutHouse = ({ house }: AboutHouseProps) => {
  const firstPhoto = house.photos?.[0] || auth1.src;
  const secondPhotoSrc = house.photos?.[1] || house.photos?.[0] || auth1.src

 

  return (
    <div className="w-full h-auto mt-10">
      <p className="text-white text-medium">{house.title}</p>
      <p className="text-[#AAAAAA] leading-6 text-sm my-5">
        {house.categories.name}
      </p>
      <div className=" w-full h-70 flex gap-10">
        <div className="w-5/12 h-full rounded-2xl relative overflow-hidden">
          {firstPhoto && (
            <Image
              src={firstPhoto}
              alt={`${house.title}`}
              fill 
              className="object-cover rounded-2xl" 
              unoptimized 
            />
          )}
        </div>
        <div className="w-7/12 h-full rounded-2xl relative overflow-hidden">
          {secondPhotoSrc && (
            <Image
              src={secondPhotoSrc}
              alt={`${house.title}`}
              fill
              className="object-cover rounded-2xl"
              unoptimized
            />
          )}
        </div>
      </div>
      <p className="text-white text-medium mt-10">{house.title}</p>
      <p className="text-[#AAAAAA] leading-6 text-sm my-5">
        {house.categories.name}
      </p>
    </div>
  );
};

export default AboutHouse;
