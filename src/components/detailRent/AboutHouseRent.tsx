import { IHouses } from "@/types/IHouses";
import React from "react";
import AdvertHouseRent from "./AdvertHouseRent";
import { BuildingOffice2Icon, ChevronLeftIcon } from "@heroicons/react/24/outline";
interface Props {
  house: IHouses;
}

const AboutHouseRent = ({ house }: Props) => {
  return (
    <>
      <div className="w-11/12 mx-auto h-auto mt-5 ">
        <p className="text-[#AAAAAA] text-sm leading-8">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
          پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم
          ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
          طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربر....
        </p>
      </div>
      <div className="w-11/12 m-auto bg-[#232323] mt-10">
        <div className="w-full h-10 bg-[#393939] rounded-2xl flex justify-between items-center p-3">
          <div className="flex gap-1">
            <BuildingOffice2Icon className="w-5 h-5 text-white" />
            <p className="text-white">آگهی های مشابه</p>
          </div>
          <div className="flex gap-3 cursor-pointer">
            <p className="text-[#8CFF45]">  مشاهده همه</p>
            <ChevronLeftIcon className="w-5 h-5 text-[#8CFF45]" />
          </div>
        </div>
        <div className="relative py-6">
          {/* <SliderAdvertise Houses={Houses}/> */}
        </div>
      </div>
    </>
  );
};

export default AboutHouseRent;
