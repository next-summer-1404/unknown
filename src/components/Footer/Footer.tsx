import React from "react";
import styles from "./Footer.module.css";
import { PhoneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import BlackArrow from "../../assets/images/blackArrow.png";
import Person from "../../assets/images/personFooter.png"
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
const Footer = () => {
  return (
    <div className="bg-[#232323]  p-9">
      <div className="relative w-full bg-[#8CFF45] rounded-3xl px-6 pt-3 pb-6">
        <div
          className={`${styles.cardShape} flex items-center justify-start gap-3 flex-row-reverse px-3 w-8/12 h-16 absolute top-0 left-0 bg-[#232323] rounded-[0_0_40px_0]`}
        >
          <span className="text-white text-4xl">The</span>
          <span className="text-white text-8xl">DELTA</span>
          <span className="text-white text-4xl"> real statement</span>
        </div>
        <div className="flex justify-center items-center gap-3 rounded-3xl h-10 w-3/12 mt-0.5 text-white bg-[#232323]">
          <div className="text-md"> 09229167194 - 09154569872</div>
          <PhoneIcon className="w-7 h-7" />
        </div>
        <div className="flex flex-wrap mt-9 w-full">
          <div className="flex flex-col gap-3 w-full md:w-7/12  ">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3 mt-5 w-fit">
                <h3 className="text-[#363636] text-sm">همیشه کنارتیم</h3>
                <Image src={BlackArrow} width={60} height={20} alt="" />
              </div>

              <div className="flex flex-col justify-between gap-5 text-[#363636]">
                <h2 className="text-xl font-light">
                  24 ساعت روز و 7 روز هفته در اختیار شماییم !
                </h2>
                <p className="text-md">
                  تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های املاکی
                  سعی دارد تا بتواند در تمام لحظات کنار شما باشد .
                </p>
              </div>
            </div>

            <form action="" className="w-11/12 py-5 px-3">
              {" "}
              <div className="flex justify-center flex-wrap gap-7">
                <div className="flex gap-5 w-full">
                  <div className="w-1/2 relative">
                    <label
                      htmlFor="username"
                      className="absolute right-3 -top-2 bg-[#8CFF45] px-1 text-[#363636] text-sm"
                    >
                      نام و نام خانوادگی:
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="وارد کنید..."
                      className="w-full border border-[#363636] text-[#363636] rounded-xl h-14 px-3 py-3 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div className="w-1/2  relative">
                    <label
                      htmlFor="username"
                      className="absolute right-3 -top-2 bg-[#8CFF45] px-1 text-[#363636] text-sm"
                    >
                      شماره موبایل:
                    </label>
                    <input
                      type="text"
                      id="phoneNumber"
                      placeholder="وارد کنید..."
                      className="w-full border border-[#363636] text-[#363636] rounded-xl h-14 px-3 py-3 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="w-full  relative">
                  <label
                    htmlFor="username"
                    className="absolute right-3 -top-2 bg-[#8CFF45] px-1 text-[#363636] text-sm"
                  >
                    پیام شما:
                  </label>
                  <textarea
                    id="comment"
                    placeholder="..."
                    className="w-full border border-[#363636] text-[#363636] rounded-xl h-36 px-3 py-3 focus:border-blue-500 focus:outline-none resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center rounded-3xl h-11 w-full gap-2 px-3 py-0.5 cursor-pointer text-white bg-[#363636] drop-shadow-[0_4px_6px_rgba(117,105,255,0.2)] shadow-[inset_0_4px_6px_rgba(0,0,0,0.04)]"
                >
                  <h3 className="text-md"> ارسال پیام</h3>
                  <ChevronLeftIcon className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
          <div className="w-full md:w-5/12 flex justify-around items-end ">
          <Image src={Person} alt="" width={400} />
          
          </div>
          <div className="w-full bg-indigo-950 h-52">ddddd</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
