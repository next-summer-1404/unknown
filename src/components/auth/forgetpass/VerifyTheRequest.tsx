"use client";
import VerifyTheRequestApi, { VerifyTheRequestType } from "@/utils/service/api/auth/forgetpass/VerifyTheRequestApi";
import {
  ChevronLeftIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Cookies from "js-cookie";


const VerifyTheRequest = () => {
  const { register, handleSubmit } = useForm<VerifyTheRequestType>();
  const [showPassword, setShowPassword] = useState(false);
  const route = useRouter();

  const onSubmit:SubmitHandler<VerifyTheRequestType> = async (data) => {
    try {
      const result: VerifyTheRequestType | null = await VerifyTheRequestApi(
        data
      );
      console.log(data,'data')
      if (result) {
        Cookies.set("resetCode", result.resetCode);
        toast.error("پاسخی از سرور دریافت نشد");
        return;
      } else {
        toast.success("کد با موفقیت تأیید شد");
        route.push("/forgetpass/3");
      }
    } catch {
      toast.error("خطا در تأیید کد");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-2">
      <div className="w-full h-20 mt-5 flex items-center justify-around gap-10 ">
        <div className="flex flex-col  w-1/2">
          <p className="text-[#DDDDDD] mb-2"> ایمیل:</p>
          <div className="w-full border border-[#DDDDDD] flex items-center rounded-2xl p-2">
            <div>
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
                className="text-[#AAAAAA] outline-none w-full"
              />
              <label className="block text-[#DDDDDD]"></label>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/2 relative">
          <p className="text-[#DDDDDD] mb-2"> کد بازیابی</p>
          <div className="w-full border  border-[#DDDDDD] flex items-center rounded-2xl p-2">
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
                <EyeIcon className="h-5 w-5" />
              ) : (
                <EyeSlashIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      <button className="w-full h-10  mt-15 flex justify-center items-center bg-[#8CFF45] rounded-2xl gap-2">
        <p className="text-md text-[#363636] "> تایید</p>
        <ChevronLeftIcon className="h-4 w-4 " />
      </button>
    </form>
  );
};

export default VerifyTheRequest;
