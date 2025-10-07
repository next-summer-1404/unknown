"use client";
import startRegisterationApi from "@/utils/service/api/auth/register/startRegisterationApi";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface Props {
  onNext: () => void;
}

interface IRegisterForm {
  email: string;
}


const StartUserRegistration: FC<Props> = ({ onNext }) => {
  const { register, handleSubmit } = useForm<IRegisterForm>();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: IRegisterForm) => {
    setLoading(true);
    const result = await startRegisterationApi(data);

    if (result?.status === 200) {
      onNext(); 
      toast.success("ایمیل با موفقیت تأیید شد");

    } else {
      toast.error("ارسال کد تایید ناموفق بود");
    }

    setLoading(false);
  };

  return (
    <div>
      <div className="w-full  h-20 flex flex-wrap">
        <p className="text-[#AAAAAA] text-xl">ایمیل :</p>
        <div className="w-full border border-[#AAAAAA] h-auto rounded-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="p-2">
            <div>
              <input
                type="email"
                {...register("email")}
                placeholder="مثال: Dakjshbd@Email.Com"
                className="text-[#AAAAAA] outline-none w-full"
              />
              <label className="block text-[#DDDDDD]"></label>
            </div>
          </form>
        </div>
      </div>
      <button
        className="w-full bg-[#8CFF45] mt-14 text-[#363636] py-2 rounded-xl flex items-center justify-center gap-2 text-lg font-bold"
        type="submit"
          onClick={onNext}

      >
        ارسال کد تایید
        <ChevronLeftIcon className="h-5 w-5" />
      </button>
    </div>
  );
};

export default StartUserRegistration;
