"use client";
import CompleteRegistrationApi from "@/utils/service/api/auth/register/CompleteRegistrationApi";
import {
  ChevronLeftIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { RegisterActionStep3 } from "./registerActions";

type CompleteRegistrationFormType = {
  password: string;
  phoneNumber: string;
};

const CompleteRegistration = () => {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const userId = Cookies.get("tempUserId");
  const route = useRouter();

  const onSubmit = async (e: any) => {
    // console.log(await e);
    // const payload = {
    //   userId: userId || "",
    //   password: data.password,
    //   phoneNumber: data.phoneNumber,
    // };

    // setLoading(true);

    // try {
    //   CompleteRegistrationApi(payload);
    //   toast.success("ثبت‌نام کامل شد");
    //   route.push("/dashboard");
    // } catch (error) {
    //   toast.error("ثبت‌نام ناموفق بود");
    // }

   
    // setLoading(false);
  };

  return (
    <form action={RegisterActionStep3} className="p-2">
      <div className="w-full h-20 mt-5 flex items-center justify-around gap-10 ">
        <div className="flex flex-col  w-1/2">
          <p className="text-[#DDDDDD] mb-2">شماره تماس:</p>
          <div className="w-full border border-[#DDDDDD] flex items-center rounded-2xl">
            <label htmlFor="phoneNumber" className="block text-[#DDDDDD]"></label>
            <input
              name="phoneNumber"
              id="phoneNumber"
              type="text"
              placeholder="مثال: 09000000000"
              className="text-[#DDDDDD] outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col w-1/2 relative">
          <p className="text-[#DDDDDD] mb-2">کلمه عبور :</p>
          <div className="w-full border  border-[#DDDDDD] flex items-center rounded-2xl">
            <label htmlFor="password" className="block text-[#DDDDDD]"></label>
            <input
              name="password"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder=" ******"
              className="text-[#DDDDDD] outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute left-5 top-11 flex items-center text-[#DDDDDD]"
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>


      {/* <label htmlFor="phoneNumber" className="block text-[#DDDDDD]">
        Phone
      </label>
      <input
        name="phoneNumber"
        id="phoneNumber"
        type="text"
        placeholder="مثال: 09000000000"
        className="text-[#DDDDDD] outline-none"
      />
      <label htmlFor="password" className="block text-[#DDDDDD]">
        PASSWORD
      </label>
      <input
        name="password"
        id="password"
        type={showPassword ? "text" : "password"}
        placeholder=" ******"
        className="text-[#DDDDDD] outline-none"
      /> */}
      <button
        type="submit"
        className="w-full h-10  mt-15 flex justify-center items-center bg-[#8CFF45] rounded-2xl gap-2"
      >
        <p className="text-md text-[#363636] ">بررسی کد تایید</p>
        <ChevronLeftIcon className="h-4 w-4 " />
      </button>
    </form>
  );
};

export default CompleteRegistration;
