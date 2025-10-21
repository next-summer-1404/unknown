"use client";
import { CheckCircleIcon, UsersIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useRouter, useParams } from "next/navigation";

const TicketFirstFinal = () => {
  const router = useRouter();
  const params = useParams();  

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/houseReserve/${params.id}/finalReserve?step=2`); 
  };

  return (
    <>
      <div className="w-11/12 mx-auto mt-10 h-auto pb-10 bg-[#393939]  rounded-2xl ">
        <div className="p-2 rounded-2xl bg-[#4D4D4D] flex gap-1 items-center">
          <UsersIcon className="w-5 h-5 mr-2 text-[#FFFFFF]" />
          <p className="text-[#FFFFFF]"> ارسال بلیط به دیگری</p>
          <span className="text-sm text-[#8CFF45]">
            (ارسال بلیط به ایمیل و شماره همراه دیگر)
          </span>
        </div>
        <form className=" w-full h-auto flex ">
          <div className=" w-1/2 flex gap-2 mt-5">
            {/* شماره تلفن */}
            <div className=" w-1/2 flex flex-col justify-center">
              <label htmlFor="phone" className="mr-4 text-[#AAAAAA]">
                شماره تلفن
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="09110000000"
                className="border border-[#AAAAAA] text-[#AAAAAA] outline-none p-2 rounded-2xl bg-transparent mr-2"
              />
            </div>

            {/* ایمیل */}
            <div className=" w-1/2  flex flex-col justify-center">
              <label htmlFor="email" className="mr-2 text-[#AAAAAA]">
                ایمیل
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="example@email.com"
                className="border border-[#AAAAAA] text-[#AAAAAA] outline-none p-2 rounded-2xl bg-transparent"
              />
            </div>
          </div>
          <div className="w-1/2 flex">
            <div className="w-1/2 "></div>
            <div className="w-1/2 ">
              <button className="flex items-center border border-[#8CFF45] rounded-xl p-2 gap-1 mt-8 mr-50">
                <CheckCircleIcon className="w-5 h-5 text-[#8CFF45]" />
                <p className="text-[#8CFF45] text-sm">ثبت اطلاعات</p>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="w-11/12 mx-auto mt-10 h-auto pb-5  rounded-2xl flex justify-between items-center px-6 border-2 border-dashed border-[#AAAAAA]">
        {/* قیمت بلیط */}
        <div className="flex  gap-2 text-[#8CFF45] text-sm items-center">
          <span className="text-[#fff] text-lg">قیمت بلیط:</span>
          <span className="font-semibold text-[#8CFF45]">
            ۱.۵۰۰.۰۰۰&nbsp;تومان
          </span>
        </div>

        <button
          type="button"
          onClick={() =>
            router.push(`/houseReserve/${params.id}/finalReserve?step=2`)
          }
          className="flex items-center gap-2 text-[#8CFF45] border border-[#8CFF45] px-4 py-2 mt-3 rounded-full text-sm hover:bg-[#8CFF45]/10 transition"
        >
          <span>تایید و ادامه فرایند</span>
          <span className="rotate-180">{"<"}</span>
        </button>
      </div>
    </>
  );
};

export default TicketFirstFinal;
