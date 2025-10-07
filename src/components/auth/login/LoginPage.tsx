"use client";
import React, { useState } from "react";
import {
  ArrowLongLeftIcon,
  ChevronLeftIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { redirect } from "next/navigation";
import Link from "next/link";
import Cookies from "js-cookie";
import LoginApi from "@/utils/service/api/auth/LoginApi";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

 const onSubmit = async (data: any) => {
    setLoading(true);
    const result = await LoginApi(data);

    if (result.success && result.token) {
      Cookies.set("token", result.token, { expires: 7 });
      redirect("/dashboard");
    } else {
      alert(result.message || "ورود ناموفق بود");
    }

    setLoading(false);
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
                <EyeIcon className="h-5 w-5" />
              ) : (
                <EyeSlashIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <Link href={"/forgetpass"} className="flex items-center text-white text-sm">
            رمز عبور خود را فراموش کردم
            <ArrowLongLeftIcon className="h-5 w-5 ml-2" />
          </Link>
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
