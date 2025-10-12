import { ChevronDownIcon, MapPinIcon } from '@heroicons/react/24/outline'
import React from 'react'

const DestinationFilter = () => {
  return (
   <div className="w-48 flex flex-col relative">
          <p className="text-sm text-[#FFFFFF] mb-1 ">مقصد یا هتل شما:</p>
          <select
            className="w-full b text-white p-2 rounded-lg appearance-none pr-8 border border-[#AAAAAA] bg-[#303030]"
            defaultValue=""
          >
            <option value="" disabled hidden>
              استان، شهر ...
            </option>
            <option value="electronics">الکترونیکی</option>
            <option value="clothing">پوشاک</option>
            <option value="books">کتاب</option>
          </select>

          <MapPinIcon className="absolute top-[32px] right-2 w-5 h-5 text-white pointer-events-none" />
          <ChevronDownIcon className="absolute top-[38px] left-2 w-5 h-5 text-white pointer-events-none" />
        </div>
  )
}

export default DestinationFilter
