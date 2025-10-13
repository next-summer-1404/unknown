import { BarsArrowDownIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import React from 'react'

const SortingFilter = () => {
  return (
     <div className="w-48 flex flex-col relative ">
          <p className="text-sm text-[#FFFFFF] mb-1">مرتب‌سازی براساس:</p>

          <div className="relative">
            <select
              className="w-full  text-white p-2 rounded-lg appearance-none pr-10 border border-[#AAAAAA] bg-[#303030]"
              defaultValue=""
            >
              <option value="" disabled hidden>
                جدیدترین‌ها
              </option>
              <option value="electronics">الکترونیکی</option>
              <option value="clothing">پوشاک</option>
              <option value="books">کتاب</option>
            </select>

            <BarsArrowDownIcon className="absolute top-3 right-4 w-5 h-5 text-white pointer-events-none" />
            <ChevronDownIcon className="absolute top-2 left-2 w-5 h-5 text-white pointer-events-none" />
          </div>
        </div>
  )
}

export default SortingFilter
