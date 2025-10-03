"use client";
import {
  ChevronLeftIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";

interface Props {
  onNext: () => void;
}

const CompleteRegistration: FC<Props> = ({ onNext }) => {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: any) => {
    onNext();
  };

  return (
    <>
      <div className="w-full h-20 mt-5 flex items-center justify-around gap-10 ">
        <div className="flex flex-col  w-1/2">
          <p className="text-[#DDDDDD] mb-2">شماره تماس:</p>
          <div className="w-full border border-[#DDDDDD] flex items-center rounded-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="p-2">
              <input
                type="text"
                placeholder="مثال: 09000000000"
                className="text-[#DDDDDD] outline-none"
              />
              <label className="block text-[#DDDDDD]"></label>
            </form>
          </div>
        </div>
        <div className="flex flex-col w-1/2 relative">
          <p className="text-[#DDDDDD] mb-2">کلمه عبور :</p>
          <div className="w-full border  border-[#DDDDDD] flex items-center rounded-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="p-2">
              <input
                type="text"
                placeholder=" ******"
                className="text-[#DDDDDD] outline-none"
              />
              <label className="block text-[#DDDDDD]"></label>
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
            </form>
          </div>
        </div>
      </div>
      <Link href={"/dashboard"}
        className="w-full h-10  mt-15 flex justify-center items-center bg-[#8CFF45] rounded-2xl gap-2"
      >
        <p className="text-md text-[#363636] ">بررسی کد تایید</p>
        <ChevronLeftIcon className="h-4 w-4 " />
      </Link>
    </>
  );
};

export default CompleteRegistration;
