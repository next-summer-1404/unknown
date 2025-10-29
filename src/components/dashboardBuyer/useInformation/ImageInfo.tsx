"use client";
import { CameraIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useRef, useState } from "react";

const ImageInfo = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
  };

  return (
   
      <div className="h-3/12 w-full border-b border-[#88888842] flex gap-60 items-center justify-normal p-12">
        <div className="text-right">
          <p className="text-xl font-bold text-gray-200">عکس نمایه شما</p>
          <p className="text-sm text-gray-400 mt-2">
            میتوانید عکس نمایه خود را تغییر دهید
          </p>
        </div>

        <div className="relative w-40 h-40">
          <div className="w-full h-full rounded-full bg-gray-600 flex items-center justify-center overflow-hidden">
            {preview ? (
              <img
                src={preview}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <span className="text-gray-300 text-sm">بدون تصویر</span>
            )}
          </div>

          <button
            onClick={() => fileInputRef.current?.click()}
            className="absolute -top-2 right-2 bg-[#8CFF45] hover:bg-[#70D23B] text-black rounded-full p-1.5 shadow-md transition-transform duration-200 hover:scale-105"
          >
            <CameraIcon className="w-5 h-5" />
          </button>

          {preview && (
            <button
              onClick={handleRemoveImage}
              className="absolute bottom-1 right-2 bg-red-500 hover:bg-red-600 rounded-full p-1.5 shadow-md"
            >
              <XMarkIcon className="w-5 h-5 text-white" />
            </button>
          )}

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleImageChange}
          />
        </div>
      </div>
   
  );
};

export default ImageInfo;
