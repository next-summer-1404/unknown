'use client'
import Image from "next/image";
import GreenArrow from "../../assets/images/greenArrow.png";

import React, { useState } from "react";
import { ContactUs } from "@/utils/service/api/ContactUs";

const ContactUsComp = () => {
  const [message, setMessage] = useState({ title: "", message: "" });
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    try {
      const result = await ContactUs(message);
      setMessage({ title: "", message: "" });
      // if (result.Status === 201) {
      //   toast.success("پیام شما با موفقیت ارسال شد!");
      // }
      console.log(result);
    } catch (err) {
      console.error(err);
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="py-20  h-auto flex ">
      <div className="w-3/5 h-auto">
        <div className=" h-auto flex items-start gap-2 p-5  ">
          <p className="text-[#8CFF45] tect-md ">ارتباط با ما</p>
          <Image
            src={GreenArrow}
            width={60}
            height={20}
            alt=""
            className="rotate-180"
          />
        </div>
        <p className="text-[#FFFFFF] mt-5 p-5">
          هر ساعت از شبانه روز که باشه تیم پیشتیبانی دلتا پاسخگوی سوالات و
          انتقادات شما هستند تا در اسرع وقت مشکلتان را حل کنیم !
        </p>
        <input
          type="email"
          placeholder="Delta@gmail.com"
          className=" rounded-2xl w-1/3 p-2 bg-[#303030] text-gray-100 placeholder-[#AAAAAA] outline-none  transition mr-5 mt-5"
        />
      </div>

      <div className="w-2/5 h-96 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-11/12 bg-[#1a1a1a] rounded-3xl p-5 shadow-[0_0_15px_#00000090]"
        >
          <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
            <div className="flex flex-col w-full">
              <label
                className="text-[#AAAAAA] text-sm mb-1 text-right"
                htmlFor="title"
              >
                موضوع پیام:
              </label>
              <input
                type="text"
                id="title"
                value={message.title}
                onChange={(e) =>
                  setMessage({ ...message, title: e.target.value })
                }
                placeholder="وارد کنید..."
                className="bg-[#0f0f0f] border border-[#434343] rounded-xl px-3 py-2 text-gray-100 text-sm outline-none transition "
              />
            </div>
          </div>

          <div className="flex flex-col mb-5">
            <label
              className="text-[#AAAAAA] text-sm mb-1 text-right"
              htmlFor="message"
            >
              پیام شما:
            </label>
            <textarea
              id="message"
              placeholder="..."
              value={message.message}
              onChange={(e) =>
                setMessage({ ...message, message: e.target.value })
              }
              className="bg-[#0f0f0f] border border-[#434343] rounded-xl px-3 py-2 text-gray-100 text-sm outline-none transition resize-none "
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#8CFF45] text-black text-sm font-semibold rounded-xl py-2 hover:bg-[#76e036] transition-all duration-200"
          >
            ← ارسال درخواست
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsComp;
