"use client";
import { CheckCircleIcon, UsersIcon } from "@heroicons/react/24/outline";
import { FC, useState } from "react";
import { useBookingStore } from "@/store/useBookingStore";

interface TicketSendingFormProps {
  setContactInfo: (info: { email: string; phone: string }) => void;
}
const TicketSendingForm: FC<TicketSendingFormProps> = ({
 setContactInfo
}) => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const setSharedContact = useBookingStore((state) => state.setSharedContact);

  // تابع ذخیره، فقط وقتی parent خواست اجرا می‌شود
 const saveToStore = () => {
  setSharedContact(email, phone); // ذخیره در Zustand
  setContactInfo({ email, phone }); // ارسال به parent
};



  return (
    <div className="py-2 px-2 bg-[#393939]  rounded-2xl ">
      <div className="p-2 rounded-2xl bg-[#4D4D4D] flex gap-1 items-center">
        <UsersIcon className="w-5 h-5 mr-2 text-[#FFFFFF]" />
        <p className="text-[#FFFFFF]"> ارسال بلیط به دیگری</p>
        <span className="text-sm text-[#8CFF45]">
          (ارسال بلیط به ایمیل و شماره همراه دیگر)
        </span>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-full py-7 px-2 flex items-center justify-between"
      >
        <div className=" w-1/2 flex gap-2">
          {/* شماره تلفن */}
          <div className="w-1/2 relative">
            <label
              htmlFor="username"
              className="absolute right-5 -top-2 bg-[#393939] px-1 text-[#aaaaaa] text-sm"
            >
              شماره تلفن:
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="وارد کنید..."
              className="w-full border border-[#aaaaaa] text-[#aaaaaa] rounded-3xl px-3 py-2 focus:border-blue-500 focus:outline-none"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {/* ایمیل */}
          <div className="w-1/2 relative">
            <label
              htmlFor="email"
              className="absolute right-5 -top-2 bg-[#393939] px-1 text-[#aaaaaa] text-sm"
            >
              ایمیل:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="وارد کنید..."
              className="w-full border border-[#aaaaaa] text-[#aaaaaa] rounded-3xl px-3 py-2 focus:border-blue-500 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <button
          type="button"
          onClick={saveToStore}
          className="flex items-center border border-[#8CFF45] rounded-2xl p-2 gap-2 cursor-pointer"
        >
          <CheckCircleIcon className="w-5 h-5 text-[#8CFF45]" />
          <p className="text-[#8CFF45] text-sm">ثبت اطلاعات</p>
        </button>
      </form>
    </div>
  );
};

export default TicketSendingForm;
