"use client";

import React from "react";

interface AddressFormProps {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

const AddressForm: React.FC<AddressFormProps> = ({ setActiveStep }) => {
  return (
    <div className="bg-[#393939] text-white rounded-2xl p-6 flex flex-col">
      <div className="flex w-full gap-6">
        <div className="flex flex-col justify-start mb-4 w-2/5 text-right">
          <p className="text-[#8CFF45] text-sm font-medium mb-2">نشانی ملک:</p>

          <input
            type="text"
            placeholder="ساری، دنیای آرزو، پژوهشگاه سپهرگان"
            className="border border-[#888] outline-none p-3 rounded-xl  text-[#AAA]
            placeholder:text-[#AAA]  transition-all"
          />

          <p className="text-[20px] text-[#AAA] mt-6 leading-12">
            با انتخاب موقعیت مکانی ملک خود از روی نقشه، <br />
            به راحتی
            <span className="text-[#8CFF45] font-medium">
              موقعیت ملک
            </span>
            را تعیین کنید.
          </p>
        </div>

        <div className="relative w-3/5 h-[340px] bg-[#2C2C2C] rounded-lg flex items-center justify-center">
          <p className="text-[#666] text-sm">
             map
          </p>
        </div>
      </div>

      <div className="flex justify-end gap-5 items-center mt-8">
        <button
          onClick={() => setActiveStep((prev) => prev - 1)}
          className="flex items-center gap-1 border border-[#8CFF45] text-[#8CFF45]
          px-6 py-2 rounded-lg font-medium hover:bg-[#8CFF45]/10 transition-all"
        >
          <span className="text-[16px]">مرحله قبل</span>
        </button>

        <button
          onClick={() => setActiveStep((prev) => prev + 1)}
          className="flex items-center bg-[#8CFF45] text-[#393939]
          px-6 py-2 rounded-lg font-medium hover:bg-[#76e634] transition-all"
        >
          <span className="text-[16px]">مرحله بعد</span>
        </button>
      </div>
    </div>
  );
};

export default AddressForm;
