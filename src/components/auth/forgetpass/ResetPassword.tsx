"use client";
import {
  ChevronLeftIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";

// تعریف تایپ‌های ورودی برای react-hook-form
interface ResetFormInputs {
  email: string;
  verificationCode: string;
  newpassword: string;
}

const ResetPassword = () => {
  const { register, handleSubmit } = useForm<ResetFormInputs>();
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const onSubmit = (data: ResetFormInputs) => {
    // console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-2">
      <div className="w-full h-20  flex items-center justify-around gap-10 ">
        <div className="flex flex-col  w-1/2 ">
          <p className="text-[#DDDDDD] mb-2"> ایمیل:</p>
          <div className="w-full border border-[#DDDDDD] flex items-center rounded-2xl p-2 ">
            <input
              type="email"
              {...register("email", {
                required: "وارد کردن ایمیل الزامی است",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "فرمت ایمیل معتبر نیست",
                },
              })}
              placeholder="مثال: Dakjshbd@Email.Com"
              className="text-[#AAAAAA] outline-none w-full bg-transparent"
            />
          </div>
        </div>
        <div className="flex flex-col w-1/2 relative ">
          <p className="text-[#DDDDDD] mb-2"> کد بازیابی</p>
          <div className="w-full border  border-[#DDDDDD] flex items-center rounded-2xl p-2">
            <input
              id="verificationCode"
              {...register("verificationCode", { required: true })}
              type={showPassword ? "text" : "password"}
              placeholder=" ******"
              className="text-[#DDDDDD] outline-none w-full bg-transparent"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute left-5 top-4 h-full flex items-center text-[#DDDDDD]"
            >
              {showPassword ? (
                <EyeIcon className="h-5 w-5" />
              ) : (
                <EyeSlashIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center relative mb-5 ">
        <div className="w-1/2 flex-col flex h-auto">
          <p className="text-[#DDDDDD] mb-2"> رمز عبور جدید</p>
          <div className="w-full border border-[#DDDDDD] flex items-center rounded-2xl p-2">
            <input
              id="newpassword"
              type={showNewPassword ? "text" : "password"}
              placeholder=" ******"
              {...register("newpassword", { required: true })}
              className="text-[#DDDDDD] outline-none w-full bg-transparent"
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute left-44 flex items-center text-[#DDDDDD]"
            >
              {showNewPassword ? (
                <EyeIcon className="h-5 w-5" />
              ) : (
                <EyeSlashIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full h-10  flex justify-center items-center bg-[#8CFF45] rounded-2xl gap-2 cursor-pointer"
      >
        <p className="text-md text-[#363636] "> تایید</p>
        <ChevronLeftIcon className="h-4 w-4 " />
      </button>
    </form>
  );
};

export default ResetPassword;
