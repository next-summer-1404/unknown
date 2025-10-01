"use client";
import {
  BuildingOffice2Icon,
  CalendarDaysIcon,
  DocumentCurrencyDollarIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { FormEvent } from "react";
import { useState } from "react";
import DatePicker , { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const SearchBar = () => {
  const [activeTab, setActiveTab] = useState("reserve");
  const [startDate, setStartDate] = useState<DateObject | null>(null);
  const [endDate, setEndDate] = useState<DateObject | null>(null);
  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="absolute bottom-2 lg:w-full  z-50 flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="flex w-3/4 items-center gap-2 px-5 py-2"
      >
        <button
          type="button"
          value="reserve"
          onClick={() => setActiveTab("reserve")}
          className={`flex items-center gap-1 cursor-pointer ${
            activeTab === "reserve" ? "text-white" : "text-[#8C8C8C]"
          }`}
        >
          <CalendarDaysIcon
            className={`w-5 h-5 ${
              activeTab === "reserve" ? "text-white" : "text-[#8C8C8C]"
            }`}
          />
          <span>رزرو ملک</span>
        </button>
        <div className="w-0.5 h-4 bg-gray-800 rounded-4xl overflow-hidden"></div>
        <button
          type="button"
          value="rent"
          onClick={() => setActiveTab("rent")}
          className={`flex items-center gap-1 cursor-pointer ${
            activeTab === "rent" ? "text-white" : "text-[#8C8C8C]"
          }`}
        >
          <BuildingOffice2Icon
            className={`w-5 h-5 ${
              activeTab === "rent" ? "text-white" : "text-[#8C8C8C]"
            }`}
          />
          <span>رهن و اجاره</span>
        </button>
        <div className="w-0.5 h-4 bg-gray-800 rounded-4xl"></div>
        <button
          type="button"
          value="sell"
          onClick={() => setActiveTab("sell")}
          className={`flex items-center gap-1 cursor-pointer ${
            activeTab === "sell" ? "text-white" : "text-[#8C8C8C]"
          }`}
        >
          <DocumentCurrencyDollarIcon
            className={`w-5 h-5 ${
              activeTab === "sell" ? "text-white" : "text-[#8C8C8C]"
            }`}
          />
          <span>خرید و فروش</span>
        </button>
      </form>
      <div className="w-3/4 h-fit py-5 bg-[#363636] rounded-3xl drop-shadow-[0px_12px_24px_rgba(0,0,0,0.16)] shadow-[inset_2px_2px_16px_0px_rgba(255,255,255,0.08)]">
        <div className="flex justify-center flex-wrap gap-2">
          <div className="w-64  relative">
            <label
              htmlFor="username"
              className="absolute right-3 -top-2 bg-[#363636] px-1 text-white text-sm"
            >
              انتخاب مقصد:
            </label>
            <select
              id="username"
              className="w-full border bg-[#363636] border-gray-300 text-white rounded-xl h-16 px-3 py-3 focus:border-blue-500 focus:outline-none"
            >
              <option value="">استان، شهر، اقامتگاه...</option>
              <option value="tehran">تهران</option>
              <option value="mashhad">مشهد</option>
              <option value="isfahan">اصفهان</option>
              <option value="shiraz">شیراز</option>
            </select>
          </div>
          <div className="w-44  relative">
            <label
              htmlFor="username"
              className="absolute right-3 -top-2 bg-[#363636] px-1 text-white text-sm"
            >
              تاریخ ورود:
            </label>
         
            <DatePicker
              calendar={persian}
              locale={persian_fa}
              placeholder="وارد کنید..."
              value={startDate}
              onChange={(date) => setStartDate(date)}
              inputClass="w-full border border-gray-300 text-white rounded-xl h-16 px-3 py-3 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="w-44  relative">
            <label
              htmlFor="username"
              className="absolute right-3 -top-2 bg-[#363636] px-1 text-white text-sm"
            >
              تاریخ خروج:
            </label>
          <DatePicker
              calendar={persian}
              locale={persian_fa}
              placeholder="وارد کنید..."
              value={endDate}
              onChange={(date) => setEndDate(date)}
              inputClass="w-full border border-gray-300 text-white rounded-xl h-16 px-3 py-3 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="w-44  relative">
            <label
              htmlFor="username"
              className="absolute right-3 -top-2 bg-[#363636] px-1 text-white text-sm"
            >
              تعداد نفرات:
            </label>
            <input
              type="text"
              id="username"
              placeholder="وارد کنید..."
              className="w-full border border-gray-300 text-white rounded-xl h-16 px-3 py-3 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <button className="flex items-center rounded-xl h-15 w-32 gap-2 px-3 py-0.5 bg-[#8CFF45] drop-shadow-[0_4px_6px_rgba(117,105,255,0.2)] shadow-[inset_0_4px_6px_rgba(0,0,0,0.04)]">
            <MagnifyingGlassIcon className="w-5 h-5 text-black" />
            <h3 className="text-md  text-black"> جستجو کن</h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
