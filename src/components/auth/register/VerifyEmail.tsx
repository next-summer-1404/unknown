"use client";
import VerifyEmailApi from "@/utils/service/api/auth/register/VerifyEmailApi";
import { ArrowPathIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { InputOtp } from "@heroui/react";

const VerifyEmail = () => {
  const [otp, setOtp] = React.useState(["", "", "", "", "", ""]);
  const inputRefs = React.useRef<Array<HTMLInputElement | null>>([]);
  const [loading, setLoading] = React.useState(false);
  const [tempUserId, setTempUserId] = React.useState<string | null>(null);
  const [otpStatet, setOtpState] = useState("");

  const rout = useRouter();
  useEffect(() => {
    const id = Cookies.get("tempUserId");
    if (!id) {
      toast.error("شناسه کاربر یافت نشد");
    }
    setTempUserId(id || null);
  }, []);

  const handleChange = (value: string, index: number) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleVerify = async () => {
    if (!tempUserId) {
      toast.error("شناسه کاربر موجود نیست");
      return;
    }

    setLoading(true);

    try {
      VerifyEmailApi({ tempUserId, verificationCode: otpStatet });
      toast.success("ایمیل با موفقیت تأیید شد");

      rout.push("/register/3");
    } catch {
      toast.error("شناسه کاربر موجود نیست");
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
      <div className="w-full flex items-center justify-between rounded-xl text-white">
        <InputOtp
          dir="ltr"
          length={6}
          value={otpStatet}
          onValueChange={setOtpState}
          classNames={{
            segment: "bg-[#363636] focus:bg-[#363636]",
          }}
          className="text-white "
        />

        <div className="flex items-center w-2/5 h-10 bg-[#7569FF] gap-10 rounded-xl">
          <button
            className="bg-white text-black text-md font-semibold px-3 py-2 w-3/5 rounded-xl hover:bg-gray-200 transition whitespace-nowrap"
            onClick={() =>
              toast("ارسال مجدد کد فعال‌سازی هنوز پیاده‌سازی نشده")
            }
          >
            ارسال دوباره رمز
            <ChevronLeftIcon className="w-4 h-4 inline-block ml-1" />
          </button>
          <div className="text-white text-sm font-bold px-4 py-2 rounded-md">
            <Countdown date={Date.now() + 120000} renderer={renderer} />
          </div>
        </div>
      </div>

      <div className="w-full h-auto mt-20 flex items-center justify-around gap-10">
        <button className="w-1/2 flex items-center justify-center gap-2 border border-white h-auto p-3 rounded-2xl hover:bg-[#8CFF45]">
          <ArrowPathIcon className="w-4 h-4 text-white" />
          <p className="text-white text-md font-semibold">تغییر شماره موبایل</p>
        </button>

        <button
          className="w-1/2 flex items-center justify-center gap-2 border border-white h-auto p-3 rounded-2xl hover:bg-[#8CFF45]"
          onClick={handleVerify}
          disabled={loading}
        >
          <p className="text-white text-md font-semibold">
            {loading ? "در حال بررسی..." : "ساخت حساب کاربری"}
          </p>
          <ChevronLeftIcon className="w-4 h-4 inline-block ml-1 text-white" />
        </button>
      </div>
    </>
  );
};

export default VerifyEmail;
