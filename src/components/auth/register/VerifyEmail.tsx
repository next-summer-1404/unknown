"use client";
import React from "react";
import Countdown from "react-countdown";
import ReactCodeInput from "@avant-arte/react-code-input";

const VerifyEmail = () => {
  const renderer = ({ minutes, seconds, completed }: any) => {
    if (completed) {
      return <span className="text-white">00:00</span>;
    } else {
      return (
        <span className="text-white font-bold">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </span>
      );
    }
  };

  return (
    <div className="w-full  text-white p-6 rounded-xl flex justify-center gap-12 items-center border border-red-600">
      {/* فیلدهای کد تأیید */}
      <div className="flex gap-3 border border-amber-800  justify-center items-center">
        <ReactCodeInput
          type="number"
          fields={6}
          inputStyle={{
            fontFamily: "inherit",
            margin: "4px",
            MozAppearance: "textfield",
            width: "40px",
            borderRadius: "8px",
            fontSize: "24px",
            height: "40px",
            paddingLeft: "8px",
            backgroundColor: "#000",
            color: "#fff",
            border: "1px solid #aaa",
            textAlign: "center",
          }}
        />
      </div>

      {/* تایمر و دکمه ارسال دوباره */}
      <div className="flex items-center gap-4 mt-4 border border-amber-300 w-[220px] ">
        <button className="bg-[#7569FF] text-white px-4 py-2 rounded-xl flex items-center gap-2 ">
          <Countdown date={Date.now() + 120000} renderer={renderer} />
        </button>
        <button className="text-black bg-white text-sm flex items-center gap-2 w-full h-auto">
          ارسال دوباره رمز
        </button>
      </div>
    </div>
  );
};

export default VerifyEmail;
