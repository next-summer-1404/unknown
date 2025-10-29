import React from "react";

const User = () => {
  return (
    <div className="h-auto border-b border-[#88888842] flex bg-[#393939] ">
      <div className="w-1/3 p-10  rounded-s-xl">
        <p className="text-xl text-gray-200">اطلاعات فردی</p>
        <p className="text-gray-400 text-sm leading-10">
          میتوانید اطلاعات فردی خود را تغییر دهید
        </p>
        <div className="flex items-center gap-8 justify-center mt-5">
          <button className="text-gray-400">انصراف</button>
          <button className="bg-[#8CFF45] text-[#393939] text-sm px-4 py-2 rounded-2xl">
            اعمال تغییرات
          </button>
        </div>
      </div>

      <div className="w-2/4 flex flex-col justify-center p-10  gap-5 rounded-e-xl">
       
        <div className="flex flex-col">
          <label className="text-[#AAA] text-sm mb-1 text-right">نام:</label>
          <input
            type="text"
            placeholder=" نام"
            className="bg-transparent border border-[#AAA] rounded-xl px-4 py-2 text-[#AAA] outline-none text-right"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[#AAA] text-sm mb-1 text-right">نام خانوادگی:</label>
          <input
            type="text"
            placeholder=" نام خانواگی"
            className="bg-transparent border border-[#AAA] rounded-xl px-4 py-2 text-[#AAA] outline-none text-right"
          />
        </div>

        
        <div className="flex flex-col">
          <label className="text-[#AAA] text-sm mb-1 text-right">ایمیل:</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="bg-transparent border border-[#AAA] rounded-xl px-4 py-2 text-[#AAA] outline-none text-right placeholder-[#AAA]"
          />
        </div>

        
        <div className="flex flex-col">
          <label className="text-gray-300 text-sm mb-1 text-right">شماره موبایل:</label>
          <input
            type="text"
            placeholder="09123456789"
            className="bg-transparent border border-[#AAA] rounded-xl px-4 py-2 text-[#AAA] outline-none text-right"
          />
        </div>
      </div>
    </div>
  );
};

export default User;
