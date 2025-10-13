import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'

const SearchFilter = () => {
  return (
    <div className="flex flex-col   rounded-lg  py-2 w-5/12 ">
          <p className="text-sm text-[#FFFFFF] mb-1">جستجو:</p>
          <div className="flex items-center justify-center gap-1  p-2 rounded-lg border border-[#AAAAAA]">
            <MagnifyingGlassIcon className="w-5 h-5 text-white mr-1" />
            <input
              type="text"
              placeholder="نام هتل موردنظر..."
              className="bg-transparent text-white outline-none w-full placeholder:text-white text-sm "
            />
          </div>
        </div>
  )
}

export default SearchFilter
