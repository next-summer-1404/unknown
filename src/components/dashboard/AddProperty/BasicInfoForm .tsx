"use client";
import { PostHousesType } from "@/types/PostHousesType";
import { postHouses } from "@/utils/service/api/postHouses";
import React, { useState } from "react";

interface BasicInfoFormProps {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

{/*check*/}
const BasicInfoForm: React.FC<BasicInfoFormProps> = ({ setActiveStep }) => {

   const [formData, setFormData] = useState<PostHousesType>({
    id: 0,
    last_updated: new Date().toISOString(),
    num_comments: 0,
    title: "",
    address: "",
    rate: 0,
    price: 0,
    tags: [],
    capacity: 0,
    location: { lat: 0, lng: 0 },
    categories: { name: "" },
    bathrooms: 0,
    parking: 0,
    rooms: 0,
    yard_type: "",
    transaction_type: "",
    caption: "",
    sellerId: 1,
    sellerName: "",
    photos: null,
    discounted_price: null,
    discount_id: null,
  });

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "capacity" || name === "price"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await postHouses(formData);
    console.log("Response:", res);
    setActiveStep(2);
  };


  return (
    <div className="bg-[#393939]  p-6">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-[#AAA] text-sm mb-2">عنوان ملک</label>
            <input
             name="title"
              value={formData.title}
              onChange={handleChange}
              type="text"
              placeholder="آپارتمان لوکس 102 در ساری"
              className=" border border-[#AAA] rounded-lg px-4 py-2 text-[#AAA] outline-none "
            />
          </div>

           <div className="flex flex-col">
            <label className="text-[#AAA] text-sm mb-2">ظرفیت</label>
            <input
            name="capacity"
              value={formData.capacity}
              onChange={handleChange}
              type="text"
              placeholder="****"
              className=" border border-[#AAA]  rounded-lg px-4 py-2 text-[#AAA] outline-none "
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
           <div className="flex flex-col">
            <label className="text-[#AAA] text-sm mb-2">نوع معامله</label>
            <select className=" border border-[#AAA] rounded-lg px-4 py-2 text-[#AAA] outline-none bg-[#393939]"  name="transaction_type"
              value={formData.transaction_type}
              onChange={handleChange}>
              <option value="">انتخاب کنید</option>
              <option value="اجاره">اجاره</option>
              <option value="رهن">رهن</option>
              <option value="فروش">فروش</option>
            </select>
          </div>
         
           <div className="flex flex-col">
            <label className="text-[#AAA] text-sm mb-2">قیمت</label>
            <input
             name="price"
              value={formData.price}
              onChange={handleChange}
              type="number"
              placeholder="مثلاً ۵,۸۰۰,۰۰۰,۰۰۰"
              className=" border border-[#AAA]  rounded-lg px-4 py-2 text-[#AAA] outline-none "
            />
          </div>

          
        </div>

        <div className="grid grid-cols-2 gap-6">
         
          <div className="flex flex-col">
            <label className="text-[#AAA] text-sm mb-2 ">نوع ملک</label>
            <select className=" border border-[#AAA] rounded-lg px-4 py-2 text-[#AAA] outline-none bg-[#393939]"  name="categories.name"
              value={formData.categories.name}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  categories: { name: e.target.value },
                }))
              }>
              <option value="اداری">اداری</option>
              <option value="تجاری">تجاری</option>
              <option value="مسکونی">مسکونی</option>
            </select>
          </div>

           <div className="flex flex-col">
            <label className="text-[#AAA] text-sm mb-2 "> زیر نوع ملک </label>
            <select className=" border border-[#AAA] rounded-lg px-4 py-2 text-[#AAA] outline-none bg-[#393939]" name="yard_type"
              value={formData.yard_type}
              onChange={handleChange}>
              <option value="">آپارتمانی</option>
              <option value="ویلایی">ویلایی</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-[#AAA] text-sm mb-2">توضیحات ملک</label>
          <textarea
           name="caption"
            value={formData.caption}
            onChange={handleChange}
            rows={3}
            placeholder="توضیحات مربوط به ملک..."
            className=" border border-[#AAA] rounded-lg px-4 py-2 text-[#AAA] outline-none "
          />
        </div>

        <div className="flex justify-end mt-4">
          <button
            type="submit"
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
