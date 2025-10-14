import { ChevronDownIcon, Squares2X2Icon } from '@heroicons/react/24/outline'
import React from 'react'

const BottomFilter = () => {
  return (
      <div className="w-full h-1/12 border-b border-[#4E4E4E] flex gap-2 pb-3 ">
            <div className="w-1/3 flex flex-col relative ">
              <p className="text-sm text-[#FFFFFF] mb-1 "> امکانات هتل:</p>
              <select
                className="w-full mt-1 text-white p-2 rounded-lg appearance-none pr-8 border border-[#AAAAAA] bg-[#303030]"
                defaultValue=""
              >
                <option value="" disabled hidden>
                  انتخاب کنید
                </option>
                <option value="electronics">دو تخت</option>
                <option value="clothing">سوئیت</option>
                <option value="books">یک تخت</option>
              </select>

              <Squares2X2Icon className="absolute top-[32px] right-2 w-5 h-5 text-white pointer-events-none" />
              <ChevronDownIcon className="absolute top-[38px] left-2 w-5 h-5 text-white pointer-events-none" />
            </div>

            <div className="w-1/3 flex flex-col relative">
              <label htmlFor="min-price" className="text-sm text-white mb-2">
                حداقل قیمت:
              </label>
              <input
                type="number"
                id="min-price"
                name="min-price"
                placeholder="مثلاً 100000"
                min="0"
                step="1000"
                className="w-full p-2  outline-none  text-white  rounded-lg appearance-none pr-2  border border-[#AAAAAA]"
              />
            </div>
            <div className="w-1/3 flex flex-col relative ">
             <label htmlFor="min-price" className="text-sm text-white mb-2">
                حداکثر قیمت:
              </label>
              <input
                type="number"
                id="min-price"
                name="min-price"
                placeholder="مثلاً 100000000"
                min="0"
                step="1000"
                className="w-full p-2  outline-none  text-white  rounded-lg appearance-none pr-2  border border-[#AAAAAA]"
              />
            </div>
          </div>
  )
}

export default BottomFilter
