"use client";

import React from "react";

interface LoginModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.8)] ">
      <div className="bg-white rounded-lg p-6 w-96 text-center">
        <h2 className="text-lg font-bold mb-4">هنوز وارد نشده‌اید!</h2>
        <p className="mb-6">آیا می‌خواهید به صفحه ورود بروید؟</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onConfirm}
            className="bg-[#8CFF45] text-black px-4 py-2 rounded cursor-pointer"
          >
            بله
          </button>
          <button onClick={onCancel} className="bg-[#7569ff] px-4 py-2 rounded cursor-pointer">
            خیر
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
