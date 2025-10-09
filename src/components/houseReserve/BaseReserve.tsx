import {
  BarsArrowDownIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  MegaphoneIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/solid";
import React from "react";

const BaseReserve = () => {
  return (
    <div className="w-full h-auto border border-amber-300">
      <div className="w-11/12 m-auto bg-[#2A2A2A] p-4 rounded-xl border border-blue-500 flex flex-wrap items-center gap-4">
        <div className="w-48 flex flex-col relative">
          <p className="text-sm text-[#FFFFFF] mb-1 ">مقصد یا هتل شما:</p>
          <select
            className="w-full b text-white p-2 rounded-lg appearance-none pr-8 border border-[#AAAAAA] bg-[#303030]"
            defaultValue=""
          >
            <option value="" disabled hidden>
              استان، شهر ...
            </option>
            <option value="electronics">الکترونیکی</option>
            <option value="clothing">پوشاک</option>
            <option value="books">کتاب</option>
          </select>

          <MapPinIcon className="absolute top-[32px] right-2 w-5 h-5 text-white pointer-events-none" />
          <ChevronDownIcon className="absolute top-[38px] left-2 w-5 h-5 text-white pointer-events-none" />
        </div>

        <div className="w-48 flex flex-col relative ">
          <p className="text-sm text-[#FFFFFF] mb-1">مرتب‌سازی براساس:</p>

          <div className="relative">
            <select
              className="w-full  text-white p-2 rounded-lg appearance-none pr-10 border border-[#AAAAAA] bg-[#303030]"
              defaultValue=""
            >
              <option value="" disabled hidden>
                جدیدترین‌ها
              </option>
              <option value="electronics">الکترونیکی</option>
              <option value="clothing">پوشاک</option>
              <option value="books">کتاب</option>
            </select>

            <BarsArrowDownIcon className="absolute top-2 right-2 w-5 h-5 text-white pointer-events-none" />
            <ChevronDownIcon className="absolute top-2 left-2 w-5 h-5 text-white pointer-events-none" />
          </div>
        </div>

        <div className="flex flex-col   rounded-lg  py-2 w-5/12 ">
          <p className="text-sm text-[#FFFFFF] mb-1">جستجو:</p>
          <div className="flex items-center justify-center   p-2 rounded-lg border border-[#AAAAAA]">
            <MagnifyingGlassIcon className="w-5 h-5 text-white mr-2" />
            <input
              type="text"
              placeholder="نام هتل موردنظر..."
              className="bg-transparent text-white outline-none w-full placeholder:text-white text-sm "
            />
          </div>
        </div>

        <div className=" mr-40 mt-5 flex items-center rounded-lg border border-[#AAAAAA] w-40">
          <MegaphoneIcon className="w-5 h-5 text-white mr-2" />
          <p className="  text-white text-sm  p-2">تعداد آگهی:</p>
        </div>
      </div>

      <div className="w-11/12 m-auto h-[1080px] mt-5 bg-[#2A2A2A] p-4 rounded-xl border border-red-500 flex gap-5">
        <div className="w-3/5 h-auto border border-amber-100 ">
          <div className="w-full h-1/12 border border-amber-500 flex gap-2">
            <div className="w-1/3 flex flex-col relative ">
              <p className="text-sm text-[#FFFFFF] mb-1 "> امکانات هتل:</p>
              <select
                className="w-full mt-1 text-white p-2 rounded-lg appearance-none pr-8 border border-[#AAAAAA] bg-[#303030]"
                defaultValue=""
              >
                <option value="" disabled hidden>
                  انتخاب کنید
                </option>
                <option value="electronics">دو تخت</option>
                <option value="clothing">سوئیت</option>
                <option value="books">یک تخت</option>
              </select>

              <Squares2X2Icon className="absolute top-[32px] right-2 w-5 h-5 text-white pointer-events-none" />
              <ChevronDownIcon className="absolute top-[38px] left-2 w-5 h-5 text-white pointer-events-none" />
            </div>

            <div className="w-1/3 flex flex-col relative">
              <label htmlFor="min-price" className="text-sm text-white mb-2">
                حداقل قیمت:
              </label>
              <input
                type="number"
                id="min-price"
                name="min-price"
                placeholder="مثلاً 100000"
                min="0"
                step="1000"
                className="w-full p-2  outline-none  text-white  rounded-lg appearance-none pr-2  border border-[#AAAAAA]"
              />
            </div>
            <div className="w-1/3 flex flex-col relative ">
             <label htmlFor="min-price" className="text-sm text-white mb-2">
                حداکثر قیمت:
              </label>
              <input
                type="number"
                id="min-price"
                name="min-price"
                placeholder="مثلاً 100000000"
                min="0"
                step="1000"
                className="w-full p-2  outline-none  text-white  rounded-lg appearance-none pr-2  border border-[#AAAAAA]"
              />
            </div>
          </div>
          <div className="w-full h-11/12 border border-blue-500"></div>
        </div>
        {/*map*/}
        <div className="w-2/5 h-auto border border-green-300">map</div>
      </div>
    </div>
  );
};

export default BaseReserve;
