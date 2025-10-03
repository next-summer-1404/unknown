"use client";
import { ArrowPathIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import React, { FC, Fragment } from "react";
import Countdown from "react-countdown";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

const VerifyEmail: FC<Props> = ({ onNext, onBack }) => {
  const [otp, setOtp] = React.useState(["", "", "", "", "", ""]);
  const inputRefs = React.useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (value: string, index: number) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 4) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const renderer = ({ minutes, seconds, completed }: any) => {
    return (
      <span className="text-white font-bold text-sm">
        {completed
          ? "00:00"
          : `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
      </span>
    );
  };

  return (
    <>
      <div className="w-full flex items-center justify-between  rounded-xl text-white">
        <div className="flex justify-between w-1/2 ">
          {otp.map((digit, index) => (
            <input
              key={index}
              // ref={(el) => (inputRefs.current[index] = el)}
              type=""
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              className="w-10 h-10 text-center text-xl border border-gray-400 rounded-md  text-white focus:outline-none"
            />
          ))}
        </div>

        <div className="flex items-center w-2/5 h-10 bg-[#7569FF] gap-10   rounded-xl ">
          <button
            className="bg-white text-black text-md font-semibold px-3 py-2 w-3/5 rounded-xl hover:bg-gray-200 transition whitespace-nowrap"
            onClick={() => {}}
          >
            ارسال دوباره رمز
            <ChevronLeftIcon className="w-4 h-4 inline-block ml-1 " />
          </button>
          <div className=" text-white text-sm font-bold px-4 py-2 rounded-md">
            <Countdown date={Date.now() + 120000} renderer={renderer} />
          </div>
        </div>
      </div>
      <div className="w-full h-auto mt-20 flex items-center justify-around gap-10">
        <button
          className="w-1/2 flex items-center justify-center  gap-2 border border-white h-auto p-3 rounded-2xl hover:bg-[#8CFF45] "
          onClick={onBack}
        >
          <ArrowPathIcon className="w-4 h-4 text-white " />
          <p className="text-white text-md font-semibold">تغییر شماره موبایل</p>
        </button>

        <button
          className="w-1/2 flex items-center justify-center gap-2 border border-white  h-auto p-3 rounded-2xl hover:bg-[#8CFF45]"
          onClick={onNext}
        >
          <p className="text-white text-md font-semibold">ساخت حساب کاربری</p>
          <ChevronLeftIcon className="w-4 h-4 inline-block ml-1 text-white " />
        </button>
      </div>
    </>
  );
};

export default VerifyEmail;
