"use client";
import React, { FC, useState } from "react";
import {
  ArrowLongLeftIcon,
  ChevronLeftIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";


const LoginPage= () => {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const onSubmit = (data: any) => {
    router.push("/dashboard");
  };

  return (
    <div className="w-full text-white p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="flex justify-center gap-3">
          <div className="relative flex justify-center items-center gap-2 w-1/2">
            <p>ایمیل:</p>
            <input
              type="email"
              {...register("email")}
              className="w-full border border-white bg-transparent rounded-lg px-4 py-2 text-right placeholder-white focus:outline-none"
              placeholder="Dakjshbd@Email.Com"
            />
          </div>

          <div className="relative flex justify-center items-center gap-2 w-1/2">
            <p>رمز عبور:</p>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              className="w-9/12 border border-[#DDDDDD] bg-transparent rounded-lg px-4 py-2 text-right placeholder-[#DDDDDD] focus:outline-none"
              placeholder="رمز عبور"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute left-5 top-3 flex items-center text-[#DDDDDD]"
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className="flex items-center text-white text-sm"
          >
            رمز عبور خود را فراموش کردم
            <ArrowLongLeftIcon className="h-5 w-5 ml-2" />
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-[#8CFF45] text-[#363636] py-2 rounded-xl flex items-center justify-center gap-2 text-lg font-bold"
        >
          ورود به حساب کاربری
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
