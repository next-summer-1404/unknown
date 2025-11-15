"use client";

import { useFormState } from "react-dom";
import { changePassword } from "./changePassword";

export default function SecurityInfo() {
  const initialState = { success: false, message: "" };
  const [state, formAction] = useFormState(changePassword, initialState);

  return (
    <form
      action={formAction}
      dir="rtl"
      className="h-5/12 border-b border-[#88888842] flex bg-[#393939]"
    >
      <div className="w-1/3 p-10 rounded-s-xl">
        <p className="text-xl text-gray-200">امنیت</p>
        <p className="text-gray-400 text-sm leading-10">
          میتوانید در این بخش رمز خود را تغییر دهید
        </p>

        {state?.message && (
          <p
            className={`text-sm mt-4 text-center ${
              state.success ? "text-green-400" : "text-red-400"
            }`}
          >
            {state.message}
          </p>
        )}

        <div className="flex items-center gap-8 justify-center mt-5">
          <button type="reset" className="text-gray-400">
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
          <label
            htmlFor="oldPassword"
            className="text-[#AAA] text-sm mb-1 text-right"
          >
            رمز عبور قبلی:
          </label>
          <input
            id="oldPassword"
            name="oldPassword"
            type="password"
            placeholder="********"
            className="bg-transparent border border-[#AAA] rounded-xl px-4 py-2 text-[#AAA] outline-none text-right"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="newPassword"
            className="text-[#AAA] text-sm mb-1 text-right"
          >
            رمز عبور جدید:
          </label>
          <input
            id="newPassword"
            name="newPassword"
            type="password"
            placeholder="********"
            className="bg-transparent border border-[#AAA] rounded-xl px-4 py-2 text-[#AAA] outline-none text-right"
          />
        </div>
      </div>
    </form>
  );
}
