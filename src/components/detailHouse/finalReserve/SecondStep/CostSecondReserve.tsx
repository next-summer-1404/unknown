import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import React from "react";

const CostSecondReserve = () => {
  return (
    <div className="w-11/12 mx-auto mt-10 h-auto bg-[#393939]  rounded-2xl ">  {/*h-40*/}
      <div className="p-2 rounded-2xl bg-[#4D4D4D] flex gap-1 items-center">
        <CurrencyDollarIcon className="w-5 h-5 mr-2 text-[#FFFFFF]" />
        <p className="text-[#FFFFFF]"> هزینه جانبی</p>
      </div>
      <p className="text-white text-sm p-5 leading-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص </p>
    </div>
  );
};

export default CostSecondReserve;
