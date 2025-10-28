"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface BasicInfoFormProps {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}


const BasicInfoForm: React.FC<BasicInfoFormProps> = ({ setActiveStep }) => {

  


  return (
    <div className="bg-[#393939]  p-6">

      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-[#AAA] text-sm mb-2">عنوان ملک</label>
            <input
              type="text"
              placeholder="آپارتمان لوکس 102 در ساری"
              className=" border border-[#AAA] rounded-lg px-4 py-2 text-[#AAA] outline-none "
            />
          </div>

           <div className="flex flex-col">
            <label className="text-[#AAA] text-sm mb-2">ظرفیت</label>
            <input
              type="text"
              placeholder="****"
              className=" border border-[#AAA]  rounded-lg px-4 py-2 text-[#AAA] outline-none "
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
           <div className="flex flex-col">
            <label className="text-[#AAA] text-sm mb-2">نوع معامله</label>
            <select className=" border border-[#AAA] rounded-lg px-4 py-2 text-[#AAA] outline-none ">
              <option value="">انتخاب کنید</option>
              <option value="اجاره">اجاره</option>
              <option value="رهن">رهن</option>
              <option value="فروش">فروش</option>
            </select>
          </div>
         
           <div className="flex flex-col">
            <label className="text-[#AAA] text-sm mb-2">قیمت</label>
            <input
              type="text"
              placeholder="مثلاً ۵,۸۰۰,۰۰۰,۰۰۰"
              className=" border border-[#AAA]  rounded-lg px-4 py-2 text-[#AAA] outline-none "
            />
          </div>

          
        </div>

        <div className="grid grid-cols-2 gap-6">
         
          <div className="flex flex-col">
            <label className="text-[#AAA] text-sm mb-2 ">نوع ملک</label>
            <select className=" border border-[#AAA] rounded-lg px-4 py-2 text-[#AAA] outline-none ">
              <option value="اداری">اداری</option>
              <option value="تجاری">تجاری</option>
              <option value="مسکونی">مسکونی</option>
            </select>
          </div>

           <div className="flex flex-col">
            <label className="text-[#AAA] text-sm mb-2 "> زیر نوع ملک </label>
            <select className=" border border-[#AAA] rounded-lg px-4 py-2 text-[#AAA] outline-none ">
              <option value="">آپارتمانی</option>
              <option value="ویلایی">ویلایی</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-[#AAA] text-sm mb-2">توضیحات ملک</label>
          <textarea
            rows={3}
            placeholder="توضیحات مربوط به ملک..."
            className=" border border-[#AAA] rounded-lg px-4 py-2 text-[#AAA] outline-none "
          />
        </div>

        <div className="flex justify-end mt-4">
          <button
            type="button"
             onClick={() => setActiveStep(2)} 
            className="bg-[#8CFF45] text-[#393939] px-6 py-2 rounded-lg font-medium hover:bg-[#76e634] transition-all"
          >
            مرحله بعد ←
          </button>
        </div>
      </form>
    </div>
  );
};

export default BasicInfoForm;
