"use client";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { ArrowPathIcon } from "@heroicons/react/16/solid";
import {
  CheckCircleIcon,
  UserMinusIcon,
  UserPlusIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { FC, useState } from "react";
import { useBookingStore, Traveler } from "@/store/useBookingStore";

interface BookerInfoFormProps {
  onSaveTravelers: (travelers: Traveler[]) => void;
}
const BookerInfoForm: FC<BookerInfoFormProps> = ({ onSaveTravelers }) => {
  type TravelerWithId = Traveler & { id: number };
  const [travelers, setTravelers] = useState<TravelerWithId[]>([]);
  const setTravelersStore = useBookingStore((state) => state.setTravelers);

  const handleAddTraveler = () => {
    setTravelers((prev) => [
      ...prev,
      {
        id: Date.now(),
        firstName: "",
        lastName: "",
        gender: "",
        birthDate: "",
        nationalId: "",
      },
    ]);
  };

  const handleRemoveTraveler = (id: number) => {
    setTravelers((prev) => prev.filter((traveler) => traveler.id !== id));
  };

  const handleChange = (id: number, field: keyof Traveler, value: string) => {
    setTravelers((prev) =>
      prev.map((traveler) =>
        traveler.id === id ? { ...traveler, [field]: value } : traveler
      )
    );
  };

  const saveTravelers = () => {
    // حذف ایدی قبل از ذخیره در استور
    const cleanedTravelers = travelers.map(({ id, ...t }) => t);
    setTravelersStore(cleanedTravelers); // ذخیره در store
    onSaveTravelers(cleanedTravelers); // ارسال به parent
  };

  return (
    <div className="h-fit py-2 px-2 bg-[#393939] rounded-2xl ">
      <div className="flex item justify-between p-2 rounded-2xl bg-[#4D4D4D] ">
        <div className="flex gap-1 items-center">
          <UsersIcon className="w-5 h-5 mr-2 text-[#FFFFFF]" />
          <h3 className="text-[#FFFFFF]">مشخصات مسافران</h3>
        </div>
        <Link href={"/"} className="flex gap-1 items-center text-[#8CFF45]">
          <ArrowPathIcon className="w-5 h-5 text-[#8CFF45]" />
          <h3 className=" text-xs">انتخاب مسافران سابق</h3>
        </Link>
      </div>

      <div className=" flex flex-col gap-1.5 w-full px-2 py-4 border-b-1 border-dashed border-[#AAAAAA]">
        {travelers.map((traveler, index) => (
          <div
            key={index}
            className="w-full h-20 flex items-center justify-between"
          >
            <div className="w-[19%] relative">
              <label
                htmlFor="username"
                className="absolute right-3 -top-2 bg-[#393939] px-1 text-[#AAAAAA] text-sm"
              >
                نام شما:
              </label>
              <input
                type="text"
                placeholder="وارد کنید..."
                className="w-full border border-[#AAAAAA] text-[#aaaaaa] rounded-xl h-full px-3 py-3 focus:border-blue-500 focus:outline-none"
                value={traveler.firstName}
                onChange={(e) =>
                  handleChange(traveler.id, "firstName", e.target.value)
                }
              />
            </div>
            <div className="w-[19%] relative">
              <label
                htmlFor="username"
                className="absolute right-3 -top-2 bg-[#393939] px-1 text-[#aaaaaa] text-sm"
              >
                نام خانوادگی:
              </label>
              <input
                type="text"
                placeholder="وارد کنید..."
                className="w-full border border-[#aaaaaa] text-[#aaaaaa] rounded-xl h-FULL px-3 py-3 focus:border-blue-500 focus:outline-none"
                value={traveler.lastName}
                onChange={(e) =>
                  handleChange(traveler.id, "lastName", e.target.value)
                }
              />
            </div>
            <div className="w-[19%] relative">
              <label
                htmlFor="username"
                className="absolute right-3 -top-2 bg-[#393939] px-1 text-[#aaaaaa] text-sm"
              >
                جنسیت شما:
              </label>
              <select
                id="username"
                className=" w-full border border-[#aaaaaa] text-[#aaaaaa] rounded-xl h-FULL px-3 py-3 focus:border-blue-500 focus:outline-none"
                value={traveler.gender}
                onChange={(e) =>
                  handleChange(traveler.id, "gender", e.target.value)
                }
              >
                <option className="text-[#aaaaaa]">جنسیت</option>

                <option value="male">مرد</option>
                <option value="female">زن</option>
              </select>
            </div>{" "}
            <div className="w-[19%] relative">
              <label
                htmlFor="username"
                className="absolute right-3 -top-2 bg-[#393939] px-1 text-[#aaaaaa] text-sm"
              >
                کدملی:
              </label>
              <input
                type="text"
                placeholder="وارد کنید..."
                className="w-full border border-[#aaaaaa] text-[#aaaaaa] rounded-xl h-FULL px-3 py-3 focus:border-blue-500 focus:outline-none"
                value={traveler.nationalId}
                onChange={(e) =>
                  handleChange(traveler.id, "nationalId", e.target.value)
                }
              />
            </div>
            <div className="w-[19%] relative">
              <label
                htmlFor="username"
                className="absolute right-3 -top-2 bg-[#393939] px-1 text-[#aaaaaa] text-sm"
              >
                تاریخ تولد:
              </label>

              <DatePicker
                calendar={persian}
                locale={persian_fa}
                placeholder="وارد کنید..."
                value={traveler.birthDate || ""}
                onChange={(date: any) =>
                  handleChange(
                    traveler.id,
                    "birthDate",
                    date.format("YYYY-MM-DD")
                  )
                }
                
                inputClass="w-full border border-[#aaaaaa] text-[#aaaaaa] rounded-xl h-FULL px-3 py-3 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <button
              onClick={() => handleRemoveTraveler(traveler.id)}
              className=" w-[3%] flex items-center justify-center cursor-pointer text-red-400"
            >
              <UserMinusIcon className="w-7 h-7" />
            </button>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-between px-2 py-4">
        <button
          onClick={handleAddTraveler}
          className="h-9 w-34 flex items-center justify-center gap-1 text-[#8CFF45] border-1 border-[#8CFF45] rounded-xl cursor-pointer"
        >
          <UserPlusIcon className="w-5 h-5" />
          <span className="text-xs">اضافه کردن مسافر</span>
        </button>
        <button
          onClick={saveTravelers}
          className="h-9 w-34 flex items-center justify-center gap-2 text-[#8CFF45] border-1 border-[#8CFF45] rounded-xl cursor-pointer"
        >
          <CheckCircleIcon className="w-5 h-5" />
          <span className="text-xs"> ثبت مسافر</span>
        </button>
      </div>
      {/* در حال تکمیل است */}
    </div>
  );
};

export default BookerInfoForm;
