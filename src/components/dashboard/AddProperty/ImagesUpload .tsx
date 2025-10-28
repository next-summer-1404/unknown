"use client";
import React, { useState } from "react";
import { PhotoIcon, PlusIcon } from "@heroicons/react/24/outline";

interface ImagesUploadProps {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

const ImagesUpload: React.FC<ImagesUploadProps> = ({ setActiveStep }) => {
  const [images, setImages] = useState<(string | null)[]>([null, null, null, null]);

  const handleUpload = (index: number, file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImages = [...images];
        newImages[index] = e.target?.result as string;
        setImages(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className=" text-[#AAA] rounded-2xl px-8 py-10 space-y-10">
      <div className="text-right">
        <p className="text-xs text-[#AAA] mb-1">آدرس ملک</p>
        <p className="text-sm [#AAA] leading-loose">
          <span className="text-[#8CFF45] font-semibold">یک تصویر بهتر از هزار کلمه.</span>{" "}
          با قرار دادن عکس شانس دیده شدن ملکتان را ۵ برابر کنید.
        </p>
      </div>

      {/* جایگاه‌های آپلود عکس */}
      <div className="flex justify-center gap-6">
        {images.map((img, i) => {
          const isAddBox = i === 3;
          return (
            <label
              key={i}
              className={`w-36 h-36 rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all ${
                isAddBox
                  ? "border-2 border-dashed border-[#8CFF45] "
                  : "border-2 border-dashed border-[#AAA] "
              }`}
            >
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleUpload(i, e.target.files?.[0] || null)}
              />
              {img ? (
                <img
                  src={img}
                  alt={`img-${i}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : isAddBox ? (
                <>
                  <div className="border border-[#8CFF45] rounded-full p-1.5 mb-1">
                    <PlusIcon className="w-5 h-5 text-[#8CFF45]" />
                  </div>
                  <span className="text-[#8CFF45] text-sm">افزودن عکس</span>
                </>
              ) : (
                <PhotoIcon className="w-8 h-8 text-[#AAA]" />
              )}
            </label>
          );
        })}
      </div>

      <div className="flex justify-end gap-5 pt-10">
        <button
          onClick={() => setActiveStep((prev) => prev - 1)}
          className="border border-[#AAA] text-[#AAA] px-6 py-2 rounded-lg flex items-center gap-2 transition-all"
        >
          <span className="text-lg">›</span>
          <span>مرحله قبل</span>
        </button>

        <button
          onClick={() => setActiveStep((prev) => prev + 1)}
          className="bg-[#8CFF45] text-[#393939] font-semibold px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-[#76e634] transition-all"
        >
          <span>مرحله بعد</span> <span className="text-lg">‹</span>
        </button>
      </div>
    </div>
  );
};

export default ImagesUpload;
