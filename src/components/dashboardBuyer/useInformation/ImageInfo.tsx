"use client";

import { CameraIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import { putUploadPicture } from "@/utils/service/api/putUploadPicture";
import { UploadProfilePictureRequest } from "@/types/TypePicture";

const COOKIE_KEY = "profilePicture";

const ImageInfo = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [uploadedPath, setUploadedPath] = useState<string | null>(null);

  useEffect(() => {
    const savedPath = Cookies.get(COOKIE_KEY);
    if (savedPath) {
      setUploadedPath(savedPath);
      setPreview(savedPath);
    }
  }, []);

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);

    await handleUpload(file);
  };

  const handleUpload = async (file: File) => {
    try {
      setLoading(true);
      setMessage(null);

      const uploadData: UploadProfilePictureRequest = { picture: file };
      const res = await putUploadPicture(uploadData);

      const path = res?.path || res?.path;
      if (path) {
        setUploadedPath(path);
        Cookies.set(COOKIE_KEY, path, { expires: 7 }); 
        setMessage(" عکس با موفقیت آپلود شد.");
      } else {
        throw new Error("مسیر عکس یافت نشد");
      }
    } catch (error) {
      console.error(error);
      setMessage(" خطا در آپلود تصویر");
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
    setUploadedPath(null);
    setMessage(null);
    Cookies.remove(COOKIE_KEY);  
  };

  return (
    <div className="h-3/12 w-full border-b border-[#88888842] flex gap-60 items-center justify-normal p-12 transition-all">
      <div className="text-right">
        <p className="text-xl font-bold text-gray-200">عکس نمایه شما</p>
        <p className="text-sm text-gray-400 mt-2">
          میتوانید عکس نمایه خود را تغییر دهید
        </p>

        {message && (
          <p
            className={`mt-3 text-sm ${
              message.includes("✅") ? "text-green-400" : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}

        {uploadedPath && (
          <p className="text-xs text-gray-400 mt-2 break-all">
            لینک عکس:
            <a
              href={uploadedPath}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8CFF45] hover:underline ml-1"
            >
              مشاهده
            </a>
          </p>
        )}
      </div>

      <div className="relative w-40 h-40">
        <div className="w-full h-full rounded-full bg-gray-600 flex items-center justify-center overflow-hidden shadow-lg">
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
          disabled={loading}
        >
          {loading ? (
            <svg
              className="w-5 h-5 text-black animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-30"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-90"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4l3.5-3.5L12 1v4a8 8 0 00-8 8h4z"
              ></path>
            </svg>
          ) : (
            <CameraIcon className="w-5 h-5" />
          )}
        </button>

        {preview && !loading && (
          <button
            onClick={handleRemoveImage}
            className="absolute bottom-1 right-2 bg-red-500 hover:bg-red-600 rounded-full p-1.5 shadow-md transition-transform duration-200 hover:scale-105"
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
