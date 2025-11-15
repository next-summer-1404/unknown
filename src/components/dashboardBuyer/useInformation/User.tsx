"use client";

import { useActionState } from "react";
import { updateUser } from "./UpdateUser";

export default function UserForm() {
  const [state, formAction] = useActionState(updateUser, { message: "" });

  return (
    <form
      action={formAction}
      dir="rtl"
      className="h-auto border-b border-[#88888842] flex bg-[#393939]"
    >
      <div className="w-1/3 p-10 rounded-s-xl">
        <p className="text-xl text-gray-200">اطلاعات فردی</p>
        <p className="text-gray-400 text-sm leading-10">
          میتوانید اطلاعات فردی خود را تغییر دهید
        </p>

        <div className="flex items-center gap-8 justify-center mt-5">
          <button
            type="reset"
            className="text-gray-400"
          >
            انصراف
          </button>
          <button
            type="submit"
            className="bg-[#8CFF45] text-[#393939] text-sm px-4 py-2 rounded-2xl"
          >
            اعمال تغییرات
          </button>
        </div>
      </div>

      <div className="w-2/4 flex flex-col justify-center p-10 gap-5 rounded-e-xl">
        <div className="flex flex-col">
          <label htmlFor="firstName" className="text-[#AAA] text-sm mb-1 text-right">
            نام:
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="نام"
            className="bg-transparent border border-[#AAA] rounded-xl px-4 py-2 text-[#AAA] outline-none text-right"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="lastName" className="text-[#AAA] text-sm mb-1 text-right">
            نام خانوادگی:
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="نام خانوادگی"
            className="bg-transparent border border-[#AAA] rounded-xl px-4 py-2 text-[#AAA] outline-none text-right"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-[#AAA] text-sm mb-1 text-right">
            ایمیل:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="example@gmail.com"
            className="bg-transparent border border-[#AAA] rounded-xl px-4 py-2 text-[#AAA] outline-none text-right placeholder-[#AAA]"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="text-gray-300 text-sm mb-1 text-right">
            شماره موبایل:
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            placeholder="09123456789"
            className="bg-transparent border border-[#AAA] rounded-xl px-4 py-2 text-[#AAA] outline-none text-right"
          />
        </div>
      </div>
    </form>
  );
}
