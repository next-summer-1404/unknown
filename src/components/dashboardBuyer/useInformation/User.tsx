"use client";

import { useState, useEffect } from "react";
import { putUpdateUser } from "@/utils/service/api/putUpdateUser";
import { UpdateUserRequest } from "@/types/UpdateUserType";
import Cookies from "js-cookie";

export default function UserForm() {
  const [formData, setFormData] = useState<UpdateUserRequest>({
    email: "",
    fullName: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState<boolean | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const id = Cookies.get("userId");
    if (id) setUserId(id);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!userId) throw new Error("شناسه کاربر یافت نشد ");
    const res = await putUpdateUser(userId, formData);
    setSuccess(true);
  };

  const handleReset = () => {
    setFormData({
      email: "",
      fullName: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
    });
    setMessage("");
    setSuccess(null);
  };

  return (
    <form
      dir="rtl"
      onSubmit={handleSubmit}
      onReset={handleReset}
      className="h-auto border-b border-[#88888842] flex bg-[#393939]"
    >
      <div className="w-1/3 p-10 rounded-s-xl">
        <p className="text-xl text-gray-200">اطلاعات فردی</p>
        <p className="text-gray-400 text-sm leading-10">
          میتوانید اطلاعات شخصی خود را تغییر دهید
        </p>

        {message && (
          <p
            className={`text-sm mt-4 text-center ${
              success ? "text-green-400" : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}

        <div className="flex items-center gap-8 justify-center mt-5">
          <button type="reset" disabled={loading} className="text-gray-400">
            انصراف
          </button>
          <button
            type="submit"
            disabled={loading}
            className="bg-[#8CFF45] text-[#393939] text-sm px-4 py-2 rounded-2xl"
          >
            {loading ? "در حال ذخیره..." : "اعمال تغییرات"}
          </button>
        </div>
      </div>

      <div className="w-2/4 flex flex-col justify-center p-10 gap-5 rounded-e-xl">
        <div className="flex flex-col">
          <label
            htmlFor="firstName"
            className="text-[#AAA] text-sm mb-1 text-right"
          >
            نام:
          </label>
          <input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            type="text"
            placeholder="نام"
            className="bg-transparent border border-[#AAA] rounded-xl px-4 py-2 text-[#AAA] outline-none text-right"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="lastName"
            className="text-[#AAA] text-sm mb-1 text-right"
          >
            نام خانوادگی:
          </label>
          <input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            type="text"
            placeholder="نام خانوادگی"
            className="bg-transparent border border-[#AAA] rounded-xl px-4 py-2 text-[#AAA] outline-none text-right"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-[#AAA] text-sm mb-1 text-right"
          >
            ایمیل:
          </label>
          <input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="example@gmail.com"
            className="bg-transparent border border-[#AAA] rounded-xl px-4 py-2 text-[#AAA] outline-none text-right placeholder-[#AAA]"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="phoneNumber"
            className="text-[#AAA] text-sm mb-1 text-right"
          >
            شماره موبایل:
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            type="text"
            placeholder="09123456789"
            className="bg-transparent border border-[#AAA] rounded-xl px-4 py-2 text-[#AAA] outline-none text-right"
          />
        </div>
      </div>
    </form>
  );
}
