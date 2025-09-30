"use client";
import React, { useState } from "react";
import {
  ArrowLongLeftIcon,
  ChevronLeftIcon,
  EyeIcon,
  EyeSlashIcon,
  UserIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import auth1 from "@/assets/images/auth1.png";
import { useForm } from "react-hook-form";

const BaseAuth = () => {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="w-full  py-10">
      <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2 w-full p-6 rounded-xl">
          <p className="text-[#8CFF45] font-bold text-2xl">خوش برگشتی!</p>
          <p className="font-bold text-white text-3xl mt-4">
            به خانواده دلتا، خوش برگشتی!
          </p>
          <p className="text-white text-xl mt-4">
            با وارد کردن اطلاعات خود به راحتی وارد پنل خودتون بشید و از
            پروژه‌هاتون خبر بگیرید!
          </p>
          <div className="w-full flex gap-3 bg-[#303030] rounded-2xl mt-4 ">
            <button className="w-1/2 flex gap-2 items-center text-[#AAAAAA] font-bold text-lg  py-2 px-4 rounded-2xl hover:bg-[#8CFF45] transition">
              <UserIcon className="h-6 w-6 text-[#AAAAAA] " />
              ورود به حساب کاربری
            </button>
            <button className="w-1/2 flex gap-2 items-center   text-[#AAAAAA] font-bold text-lg  py-2 px-4 rounded-2xl hover:bg-[#8CFF45] transition">
              <UserPlusIcon className="h-6 w-6 text-[#AAAAAA] " />
              ساخت حساب کاربری
            </button>
          </div>
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-[#AAAAAA]"></div>
            <span className="mx-4 text-[#AAAAAA] font-medium whitespace-nowrap">
              یا می‌توانید
            </span>
            <div className="flex-grow h-px bg-[#AAAAAA]"></div>
          </div>
         <form onSubmit={handleSubmit(onSubmit)} className="w-full flex gap-5 rounded-2xl mt-4 h-10">
      <div className="w-1/2 gap-2 flex relative">
        <p className="text-[#DDDDDD] text-md mt-2">ایمیل :</p>
        <input
          type="email"
          {...register("email")}
          className="peer w-9/11 border border-[#DDDDDD] rounded-lg px-4 pt-2 pb-2 text-right text-[#DDDDDD] focus:outline-none"
          placeholder="Dakishbd@Email.Com"
        />
        <label className="absolute border-[#DDDDDD] right-4 top-2 text-sm text-[#DDDDDD] px-1 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm"></label>
      </div>

      <div className="relative w-1/2 flex gap-2">
        <p className="text-[#DDDDDD] text-md mt-2">رمز عبور: </p>
        <input
          type={showPassword ? "text" : "password"}
          {...register("password")}
          className="peer w-4/5 bg-transparent border rounded-lg px-4 pt-2 pb-2 text-right text-[#DDDDDD] focus:outline-none"
          placeholder="رمز عبور"
        />
        <label className="absolute right-4 top-2 text-sm text-[#DDDDDD] px-1 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm"></label>
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute left-3 top-2 ml-2 text-gray-400"
        >
          {showPassword ? (
            <EyeSlashIcon className="h-5 w-5 text-gray-400" />
          ) : (
            <EyeIcon className="h-5 w-5 text-gray-400" />
          )}
        </button>
      </div>
    </form>
          <div className="w-full h-auto  mt-4 flex">
            <div className="w-3/5 "></div>
            <div className="w-2/5 flex  items-center justify-center">
              <button className="text-[#FFFFFF] flex items-center justify-center">
                رمز عبور خود را فراموش کردم
                <ArrowLongLeftIcon className="h-5 w-5 text-[#FFFFFF] ml-2 " />
              </button>
            </div>
          </div>
          <div className="w-full h-10 bg-[#8CFF45] border border-[#8CFF45] mt-10 rounded-2xl flex justify-center items-center">
            <button className="text-[#363636] text-xl text-center flex justify-center items-center gap-3">
              ورود به حساب کاربری
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="md:w-1/2 w-full border rounded-xl mt-8 p-6 relative h-[420px]">
          <Image
            src={auth1}
            alt="اهراز هویت"
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default BaseAuth;
