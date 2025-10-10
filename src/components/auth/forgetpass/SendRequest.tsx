"use client"
import SendRequestApi from "@/utils/service/api/auth/forgetpass/SendRequestApi";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

interface IForgetpass {
  email: string;
}

const SendRequest = () => {
  const { register, handleSubmit } = useForm<IForgetpass>();
  const [loading, setLoading] = useState(false);
  const route = useRouter();

  const onSubmit = async (data: IForgetpass) => {
    setLoading(true);
    try {
      const result = await SendRequestApi(data);
      if (result?.resetCode) {
        Cookies.set("resetCode", result.resetCode, { expires: 1 });
        toast.success("کد با موفقیت ثبت شد");
        route.push("/forgetpass/2");
      }
    } catch (error) {
      toast.error("ارسال کد تایید ناموفق بود");
    }
    setLoading(false);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full h-20 flex flex-wrap">
        <p className="text-[#AAAAAA] text-xl">ایمیل :</p>
        <div className="w-full border border-[#AAAAAA] h-auto rounded-2xl p-2">
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="مثال: Dakjshbd@Email.Com"
            className="text-[#AAAAAA] outline-none w-full bg-transparent"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#8CFF45] mt-14 text-[#363636] py-2 rounded-xl flex items-center justify-center gap-2 text-lg font-bold"
      >
        {loading ? "در حال ارسال..." : "ارسال کد تایید"}
        <ChevronLeftIcon className="h-5 w-5" />
      </button>
    </form>
  );
};

export default SendRequest;
