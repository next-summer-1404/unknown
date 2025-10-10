import { BarsArrowDownIcon, ChevronDownIcon, MagnifyingGlassIcon, MapPinIcon, MegaphoneIcon } from '@heroicons/react/24/outline'
import React from 'react'

const TopFilter = () => {
  return (
    
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
    
  )
}

export default TopFilter
