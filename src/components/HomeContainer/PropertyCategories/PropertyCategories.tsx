import Image, { StaticImageData } from "next/image";
import GreenArrow from "../../../assets/images/greenArrow.png";
import GreenCircle from "../../../assets/images/GreenCircle.png";
import SmallCard from "../SmallCard/SmallCard";
import apartment from "./../../../assets/images/apartment.png";
import cottage from "./../../../assets/images/cottage.png";
import house from "./../../../assets/images/house.png";
import villa from "./../../../assets/images/villa.png";
import woodenHouse from "./../../../assets/images/wooden-house.png";
import { FC } from "react";

const PropertyCategories = () => {
  type Card = {
    id: number;
    title: string;
    image: StaticImageData;
  };
  const cardList: Card[] = [
    { id: 1, title: "ملک ویلایی", image: villa },
    { id: 2, title: "ملک کلبه", image: cottage },
    { id: 3, title: "بومگردی", image: woodenHouse },
    { id: 4, title: "استخردار", image: house },
    { id: 5, title: "ملک ساحلی", image: cottage },
    { id: 6, title: "ملک ساحلی", image: apartment },
  ];
  return (
    <div className="relative w-full overflow-hidden min-h-96 ">
      <div className="flex flex-col items-center justify-center gap-8 mt-24 ">
        <div className="h-fit flex flex-col justify-center items-center gap-6 text-white">
          <div className="h-fit flex justify-center items-center gap-5 ">
            <Image src={GreenArrow} width={60} height={70} alt="" />
            <h3 className=" text-center text- font-bold text-[#8CFF45]">
              دسته بندی املاک دلتا
            </h3>
            <Image
              src={GreenArrow}
              width={60}
              height={70}
              alt=""
              className="rotate-180"
            />
          </div>
          <h3 className="text-2xl">هر ملکی بخوای اینجا پیدا میشه ! </h3>
          <h3 className="">
            با کلیک به روی هر دسته بندی می توانید تمام آگهی مربوط آن را مشاهده
            کنید و به ملک مورد علاقه خود برسید
          </h3>
        </div>
        <div className="h-fit pt-8 w-full flex gap-2 justify-around ">
          {cardList.map((list, index) => {
            const Icon = list.image;
            return <SmallCard key={index} title={list.title} image={Icon} />;
          })}
        </div>
      </div>
      <Image
        src={GreenCircle}
        width={218}
        height={1}
        alt=""
        className="absolute left-0 -top-12"
      />
    </div>
  );
};

export default PropertyCategories;
