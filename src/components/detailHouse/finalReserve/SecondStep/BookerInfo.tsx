import { UsersIcon } from '@heroicons/react/24/outline'
import React from 'react'

const BookerInfo = () => {
  return (
    <div className="w-11/12 mx-auto mt-10 h-40 bg-[#393939]  rounded-2xl ">
      <div className="p-2 rounded-2xl bg-[#4D4D4D] flex gap-1 items-center">
            <UsersIcon className="w-5 h-5 mr-2 text-[#FFFFFF]"/>
            <p className="text-[#FFFFFF]">مشخصات مسافران</p>
          </div>
    </div>
  )
}

export default BookerInfo
