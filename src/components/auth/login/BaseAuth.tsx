"use client";
import { UserIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import ImageAuth from "@/components/common/ImageAuth/ImageAuth";
import { FC, ReactNode } from "react";
import ResetPassword from "../forgetpass/ResetPassword";
import VerifyTheRequest from "../forgetpass/VerifyTheRequest";
import SendRequest from "../forgetpass/SendRequest";
import Link from "next/link";

interface IAuth {
  children: ReactNode;
}

const BaseAuth: FC<IAuth> = ({ children }) => {
  return (
    <div className="w-full pt-20 py-10 ">
      <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-6 ">
        <div className="md:w-1/2 w-full p-6 ">
          <p className="text-[#8CFF45] font-bold text-2xl">خوش برگشتی!</p>
          <p className="font-bold text-white text-3xl mt-4">
            به خانواده دلتا، خوش برگشتی!
          </p>
          <p className="text-white text-[18px] mt-4">
            با وارد کردن اطلاعات خود به راحتی وارد پنل خودتون بشید و از
            پروژه‌هاتون خبر بگیرید!
          </p>
          <div className="w-full flex gap-3 bg-[#303030] rounded-2xl mt-10 ">
            <Link href={"/login"} className="w-1/2 flex gap-2 items-center text-[#AAAAAA] font-bold text-lg  py-2 px-4 rounded-2xl hover:bg-[#8CFF45] transition">
              <UserIcon className="h-6 w-6 text-[#AAAAAA] " />
              ورود به حساب کاربری
            </Link>
            <Link href={"/register/1"} className="w-1/2 flex gap-2 items-center   text-[#AAAAAA] font-bold text-lg  py-2 px-4 rounded-2xl hover:bg-[#8CFF45] transition">
              <UserPlusIcon className="h-6 w-6 text-[#AAAAAA] " />
              ساخت حساب کاربری
            </Link>
          </div>
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-[#AAAAAA]"></div>
            <span className="m-4 text-[#AAAAAA] font-medium whitespace-nowrap">
              یا می‌توانید
            </span>
            <div className="flex-grow h-px bg-[#AAAAAA]"></div>
          </div>
          {/*  */}
          {children}
        </div>
        <div className=" w-1/2 h-auto">
          <ImageAuth  />
        </div>
      </div>
    </div>
  );
};

export default BaseAuth;
