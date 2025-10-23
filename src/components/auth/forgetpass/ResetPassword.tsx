"use client";
import ResetPasswordApi, {
  IResetPasswordType,
} from "@/utils/service/api/auth/forgetpass/ResetPasswordApi";
import {
  ChevronLeftIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface FormData {
  email: string;
  verificationCode: string;
  newpassword: string;
}

const ResetPassword = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const route = useRouter();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const apiPayload: IResetPasswordType = {
      email: data.email,
      resetCode: data.verificationCode, 
      newPassword: data.newpassword,
      // message: null, 
    };

    try {
      const result: IResetPasswordType | null = await ResetPasswordApi(apiPayload);
      // console.log(apiPayload)

      
        Cookies.set("newPassword", result?.newPassword || "");
        toast.success("رمز عبور با موفقیت تغییر کرد.");
        route.push("/login");
      
    } catch {
      toast.error("خطا در تأیید کد"); 
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-2">
      <div className="flex  items-center relative w-full mt-[-20px]">
        <div className="flex-col flex h-auto w-full">
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
              className="absolute left-4 flex items-center text-[#DDDDDD]"
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
        className="w-full h-10  flex justify-center items-center bg-[#8CFF45] rounded-2xl gap-2 cursor-pointer mt-15"
      >
        <p className="text-md text-[#363636] "> تایید</p>
        <ChevronLeftIcon className="h-4 w-4 " />
      </button>
    </form>
  );
};

export default ResetPassword;
