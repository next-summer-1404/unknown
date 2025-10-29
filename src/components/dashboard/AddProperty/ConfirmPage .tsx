"use client";
import {
  BuildingLibraryIcon,
  BuildingOffice2Icon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import React from "react";


interface ConfirmPageProps {
  setActiveStep: (step: number) => void;
}

const ConfirmPage: React.FC<ConfirmPageProps> = ({ setActiveStep }) => {
  return (
    <>
      <div className="w-full h-auto rounded-2xl flex flex-col border border-[#8888884D]">
        <div className="flex">
          <div className="w-1/2 h-auto p-4">
            <div className="border rounded-2xl h-[226px] border-red-300"></div>

            <div className="flex items-center gap-2 mt-5">
              <MapPinIcon className="w-5 h-5 text-[#AAA]" />
              <p className="text-[#AAA] text-sm">
                خیابان ولیعصر، تهران، منطقه مرکزی
              </p>
            </div>

            <div className="flex items-center gap-2 mt-3">
              <BuildingOffice2Icon className="w-5 h-5 text-[#AAA]" />
              <p className="text-[#AAA] text-sm">
                ۲ خوابه، ۲ حمامه، ۱ پارکینگ، ظرفیت ۶ نفر
              </p>
            </div>

            <div className="flex items-center gap-2 mt-3">
              <BuildingLibraryIcon className="w-5 h-5 text-[#AAA]" />
              <p className="text-[#AAA] text-sm">حیاط بالکنی</p>
            </div>

            <div className="flex items-center gap-2 mt-3">
              <BuildingOfficeIcon className="w-5 h-5 text-[#AAA]" />
              <p className="text-[#AAA] text-sm">رهن، اجاره</p>
            </div>
          </div>

          <div className="w-1/2">
            <p className="text-[24px] font-bold p-5 text-[#AAA]">
              آپارتمان لوکس زعفرانیه
            </p>

            <p className="text-[14px] text-[#AAA] leading-9 px-5">
              آپارتمانی دنج و آرام در قلب شهر، جایی که زندگی روزمره راحت و
              سبک‌تر است. فضایی مدرن با طراحی منحصربه‌فرد، یادآور خانه‌های دنج و
              دل‌نشین. محلی برای لحظه‌های خوش، آرامش و شروعی نو در زندگی
              روزمره‌تان. آپارتمانی دنج و آرام در قلب شهر، جایی که زندگی روزمره
              راحت و سبک‌تر است. فضایی مدرن با طراحی منحصربه‌فرد، یادآور
              خانه‌های دنج و دل‌نشین. محلی برای لحظه‌های خوش، آرامش و شروعی نو
              در زندگی روزمره‌تان. محلی برای لحظه‌های خوش، آرامش و شروعی نو در
              زندگی روزمره‌تان.
            </p>
            <div className="flex flex-col px-8 py-4 space-y-4">
              <div className="flex justify-start items-center gap-3">
                <span className="text-[#AAA] text-sm mt-1"> برچسب‌ها</span>

                <button className="bg-[#8CFF45] text-[#393939] px-5 py-1.5 rounded-lg text-sm font-medium">
                  بالکن
                </button>
                <button className="bg-[#8CFF45] text-[#393939] px-5 py-1.5 rounded-lg text-sm font-medium">
                  مسکونی
                </button>
                <button className="bg-[#8CFF45] text-[#393939] px-5 py-1.5 rounded-lg text-sm font-medium">
                  آپارتمان
                </button>
              </div>

              <div className="flex flex-col items-start text-[#AAA] text-[14px] space-y-1">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={1.3}
                    stroke="currentColor"
                    fill="none"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8.25l9-6 9 6-9 6-9-6z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8.25V21h18V8.25"
                    />
                  </svg>
                  <span>مسکونی</span>
                </div>

                <div className="flex items-end gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={1.3}
                    stroke="currentColor"
                    fill="none"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v18m9-9H3"
                    />
                  </svg>
                  <span>آپارتمانی</span>
                </div>
              </div>

              <div className="flex justify-start items-center gap-2 pt-2">
                <CurrencyDollarIcon className="w-5 h-5 text-[#8CFF45]" />
                <span className="text-[#8CFF45] text-[20px] font-bold">
                  ۷۵,۰۰۰,۰۰۰
                </span>
                <span className="text-[#8CFF45] text-sm">ریال</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 justify-end pt-6">
        <button onClick={() => setActiveStep(4)}   className="border border-[#8CFF45] text-[#8CFF45] px-5 py-2 rounded-lg flex items-center gap-1  transition-all">
          مرحله قبل <span className="text-lg">›</span>
        </button>
        <button className="bg-[#8CFF45] text-[#393939] font-semibold px-6 py-2 rounded-lg  transition-all">
          ثبت آگهی
        </button>
      </div>
    </>
  );
};

export default ConfirmPage;
