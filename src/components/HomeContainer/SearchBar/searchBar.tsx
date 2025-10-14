"use client";
import {
  BuildingOffice2Icon,
  CalendarDaysIcon,
  DocumentCurrencyDollarIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { FormEvent, useEffect } from "react";
import { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { ILocation } from "@/types/ILocation";
import { getAllLocation } from "@/utils/service/api/location";
import { getHouses } from "@/utils/service/api/getAllHouses";
import { IHouses } from "@/types/IHouses";

const SearchBar = () => {
  const [activeTab, setActiveTab] = useState("reservation");
  const [startDate, setStartDate] = useState<DateObject | null>(null);
  const [endDate, setEndDate] = useState<DateObject | null>(null);
  const [locations, setLocations] = useState<ILocation[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [houses, setHouses] = useState<IHouses[]>([]);
  const [number, setNumber] = useState();
  const [guestCount, setGuestCount] = useState<number | null>(null);

  const [selectedLocation, setSelectedLocation] = useState<string>("");

  // console.log(locations);
   console.log(houses);
   console.log(number);

  const Location = async () => {
    setLoading(true);
    try {
      const result = await getAllLocation({ page: 1, limit: 100 });
      setLocations(result.data);
    } catch (error) {
      console.error(error);
      setError(String(error));
    } finally {
      setLoading(false);
    }
  };

    const GetHouses = async () => {
    setLoading(true);
    try {
      const result = await getHouses({ page: 1, limit: 100 });
      setHouses(result.houses);
      setNumber(result.totalCount)
    } catch (error) {
      console.error(error);
      setError(String(error));
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    Location();
    GetHouses();
  }, []);

  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   let transactionType = "";
  //   if (activeTab === "reservation") transactionType = "reservation";
  //   else if (activeTab === "rental") transactionType = "rental";
  //   else if (activeTab === "direct_purchase")
  //     transactionType = "direct_purchase";

  //   // if (activeTab === "reservation") {
  //   //   console.log("reservation");
  //   // } else if (activeTab === "rental") {
  //   //   console.log("rental");
  //   // } else if (activeTab === "direct_purchase") {
  //   //   console.log("direct_purchase");
  //   // }

  //   try {
  //     const result = await getHouses({
  //       page: 1,
  //       limit: 100,
  //       transactionType: transactionType,
  //       location: selectedLocation || undefined,
  //       guest_count: guestCount || undefined,

  //       // start_date: startDate ? startDate.format("YYYY-MM-DD") : undefined,
  //       // end_date: endDate ? endDate.format("YYYY-MM-DD") : undefined,
  //     });

  //     setHouses(result.data);
  //     console.log("نتیجه جستجو:", result.data);
  //   } catch (error) {
  //     console.error("خطا در جستجو:", error);
  //     setError(String(error));
  //   }
  // };

  return (
    <form
      // onSubmit={handleSubmit}
      className="absolute bottom-2 lg:w-full  z-50 flex flex-col items-center"
    >
      <div className="flex w-3/4 items-center gap-2 px-5 py-2">
        <button
          type="button"
          value="reservation"
          onClick={() => setActiveTab("reservation")}
          className={`flex items-center gap-1 cursor-pointer ${
            activeTab === "reservation" ? "text-white" : "text-[#8C8C8C]"
          }`}
        >
          <CalendarDaysIcon
            className={`w-5 h-5 ${
              activeTab === "reservation" ? "text-white" : "text-[#8C8C8C]"
            }`}
          />
          <span>رزرو ملک</span>
        </button>
        <div className="w-0.5 h-4 bg-gray-800 rounded-4xl overflow-hidden"></div>
        <button
          type="button"
          value="rental"
          onClick={() => setActiveTab("rental")}
          className={`flex items-center gap-1 cursor-pointer ${
            activeTab === "rental" ? "text-white" : "text-[#8C8C8C]"
          }`}
        >
          <BuildingOffice2Icon
            className={`w-5 h-5 ${
              activeTab === "rental" ? "text-white" : "text-[#8C8C8C]"
            }`}
          />
          <span>رهن و اجاره</span>
        </button>
        <div className="w-0.5 h-4 bg-gray-800 rounded-4xl"></div>
        <button
          type="button"
          value="direct_purchase"
          onClick={() => setActiveTab("direct_purchase")}
          className={`flex items-center gap-1 cursor-pointer ${
            activeTab === "direct_purchase" ? "text-white" : "text-[#8C8C8C]"
          }`}
        >
          <DocumentCurrencyDollarIcon
            className={`w-5 h-5 ${
              activeTab === "direct_purchase" ? "text-white" : "text-[#8C8C8C]"
            }`}
          />
          <span>خرید و فروش</span>
        </button>
      </div>
      <div className="w-3/4 h-fit py-5 bg-[#363636] rounded-3xl drop-shadow-[0px_12px_24px_rgba(0,0,0,0.16)] shadow-[inset_2px_2px_16px_0px_rgba(255,255,255,0.08)]">
        <div className="flex justify-center flex-wrap gap-2">
          <div className="w-1/2 md:w-64  relative">
            <label
              htmlFor="username"
              className="absolute right-3 -top-2 bg-[#363636] px-1 text-white text-sm"
            >
              انتخاب مقصد:
            </label>
            <select
              id="username"
              onChange={(e) => setSelectedLocation(e.target.value)}
              className=" w-full border bg-[#363636] border-gray-300 text-white rounded-xl h-16 px-3 py-3 focus:border-blue-500 focus:outline-none"
            >
              <option value="">استان، شهر، اقامتگاه...</option>
              {locations.map((loc) => (
                <option
                  key={loc.id}
                  value={loc.area_name}
                  className="cursor-pointer"
                >
                  {loc.area_name}
                </option>
              ))}
            </select>
          </div>
          <div className="w-1/3 md:w-44  relative">
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
          <div className="w-3/5 md:w-44 relative">
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
          <div className="w-3/5 md:w-44  relative">
            <label
              htmlFor="username"
              className="absolute right-3 -top-2 bg-[#363636] px-1 text-white text-sm"
            >
              تعداد نفرات:
            </label>
            <input
              type="text"
              value={guestCount ?? ""}
              onChange={(e) => setGuestCount(Number(e.target.value))}
              placeholder="وارد کنید..."
              className="w-full border border-gray-300 text-white rounded-xl h-16 px-3 py-3 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="flex items-center rounded-xl h-15 w-32 gap-2 px-3 py-0.5 cursor-pointer bg-[#8CFF45] drop-shadow-[0_4px_6px_rgba(117,105,255,0.2)] shadow-[inset_0_4px_6px_rgba(0,0,0,0.04)]"
          >
            <MagnifyingGlassIcon className="w-5 h-5 text-black" />
            <h3 className="text-md  text-black"> جستجو کن</h3>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
