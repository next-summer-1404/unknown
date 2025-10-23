import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import React from "react";

const AdditionalCost = () => {
  return (
    <div className="w-full flex flex-col items-center gap-3 px-2 py-2  bg-[#393939] rounded-2xl">
      {" "}
      <div className="w-full p-2 rounded-2xl bg-[#4D4D4D] flex gap-1 items-center">
        <CurrencyDollarIcon className="w-5 h-5 mr-2 text-[#FFFFFF]" />
        <h4 className="text-[#FFFFFF]"> هزینه جانبی</h4>
      </div>
      <p className="text-white text-sm p-5 px-10 leading-8">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
        درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص{" "}
      </p>
    </div>
  );
};

export default AdditionalCost;
