"use client";

import { useState } from "react";
import { putPassword } from "@/utils/service/api/putPassword";
import { ChangePasswordRequest } from "@/types/ChangePassword";

export default function SecurityInfo() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const body: ChangePasswordRequest = {
      currentPassword,
      newPassword,
    };

    try {
      const res = await putPassword(body);
      setSuccess(true);
      setMessage(res.message || "رمز عبور با موفقیت تغییر کرد");
      setCurrentPassword("");
      setNewPassword("");
    } catch (error: any) {
      setSuccess(false);
      setMessage(
        error?.response?.data?.message || "خطا در تغییر رمز. لطفاً دوباره بررسی کنید."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setCurrentPassword("");
    setNewPassword("");
    setMessage("");
  };

  return (
    <form
      dir="rtl"
      onSubmit={handleSubmit}
      onReset={handleReset}
      className="h-5/12 border-b border-[#88888842] flex bg-[#393939]"
    >
      <div className="w-1/3 p-10 rounded-s-xl">
        <p className="text-xl text-gray-200">امنیت</p>
        <p className="text-gray-400 text-sm leading-10">
          میتوانید در این بخش رمز خود را تغییر دهید
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
            {loading ? "در حال اعمال..." : "اعمال تغییرات"}
          </button>
        </div>
      </div>

      <div className="w-2/4 flex flex-col justify-center p-10 gap-5 rounded-e-xl">
        <div className="flex flex-col">
          <label
            htmlFor="currentPassword"
            className="text-[#AAA] text-sm mb-1 text-right"
          >
            رمز عبور قبلی:
          </label>
          <input
            id="currentPassword"
            name="currentPassword"
            type="password"
            placeholder="********"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="bg-transparent border border-[#AAA] rounded-xl px-4 py-2 text-[#AAA] outline-none text-right"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="newPassword"
            className="text-[#AAA] text-sm mb-1 text-right"
          >
            رمز عبور جدید:
          </label>
          <input
            id="newPassword"
            name="newPassword"
            type="password"
            placeholder="********"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="bg-transparent border border-[#AAA] rounded-xl px-4 py-2 text-[#AAA] outline-none text-right"
          />
        </div>
      </div>
    </form>
  );
}
