import Image from "next/image";
import React from "react";

const AboutHouse = () => {
  return (
    <div className="w-full h-auto mt-10">
      <p className="text-white text-medium">
        بهترین سبک طراحی وبسایت در سال 2024 چیست ؟
      </p>
      <p className="text-[#AAAAAA] leading-6 text-sm my-5">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است گرها و متون بلکه روزنامه و مجله در ست...لورم ایپسوم
      </p>
      <div className=" w-full h-70 flex gap-10">
        <div className="w-5/12 h-70 rounded-2xl border border-blue-200">
          {/* <Image /> */}
        </div>
        <div className="w-7/12 h-70 rounded-2xl border border-blue-500">
          {/* <Image /> */}
        </div>
      </div>
      <p className="text-white text-medium mt-10">
        بهترین سبک طراحی وبسایت در سال 2024 چیست ؟
      </p>
      <p className="text-[#AAAAAA] leading-6 text-sm my-5">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است گرها و متون بلکه روزنامه و مجله در ست...لورم ایپسوم
      </p>
    </div>
  );
};

export default AboutHouse;
